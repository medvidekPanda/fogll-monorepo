import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { distinct, map, switchMap, take } from 'rxjs/operators';
import { Project } from 'src/app/shared/model/project.model';
import { QueryResponse } from 'src/app/shared/model/query.model';
import { UserInfo } from 'src/app/shared/model/user.model';
import { ProjectsService } from 'src/app/shared/service/projects.service';
import { UserService } from 'src/app/shared/service/user.service';

import { USER_ADD } from '../object/forms/user-add.object';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss'],
})
export class AddEditUserComponent implements OnInit {
  userValue$ = new BehaviorSubject<UserInfo | undefined>(undefined);
  buttonDisabled$ = new BehaviorSubject<boolean>(true);

  @Input() set userValue(value: UserInfo) {
    this.userValue$.next(value);
  }

  user$ = this.userValue$.pipe(
    switchMap((userValue: UserInfo) => {
      if (userValue) {
        return this.userService.getItem$(userValue._id) as Observable<UserInfo>;
      }

      return of(undefined);
    })
  );

  availableProjects$ = this.projectsService
    .getItems$({ view: 'day-events/projectList' })
    .pipe(
      distinct(),
      map((projects: QueryResponse<Project>) => {
        return projects.rows.map((project) => {
          return {
            value: project.value.projectId,
            name: project.value.name,
            isChecked: project.value.isChecked,
          };
        });
      })
    );

  formModel$ = combineLatest([this.user$, this.availableProjects$]).pipe(
    map(([user, availableProjects]) => {
      availableProjects.map((availableProject) => {
        const isInDb = user?.projects.some(
          (project: string) => project === availableProject.value
        );
        availableProject.isChecked = isInDb;
      });

      return { ...user, availableProjects };
    })
  );

  form = new FormGroup({});

  fields: FormlyFieldConfig[] = USER_ADD;

  fields$ = this.formModel$.pipe(
    take(1),
    map((formModel) => {
      if (formModel.email) {
        USER_ADD[2].templateOptions.readonly = true;
      }
      if (formModel.email || formModel.firstName || formModel.lastName) {
        USER_ADD[4].templateOptions.disabled = true;
        USER_ADD[5].templateOptions.disabled = true;
      }
      USER_ADD[3].templateOptions.options = formModel.availableProjects;
      return USER_ADD;
    })
  );

  constructor(
    private angularFire: AngularFireAuth,
    private modalController: ModalController,
    private projectsService: ProjectsService,
    private userService: UserService
  ) {}

  ngOnInit() {}

  addEditUser() {
    this.userValue$.value ? this.editUser() : this.addUser();
  }

  formChanged() {
    this.buttonDisabled$.next(this.form.invalid);
  }

  private closeModal() {
    this.modalController.dismiss();
  }

  private async addUser() {
    const email = this.form.value.email;
    const password = this.form.value.password;
    delete this.form.value.password;
    delete this.form.value.passwordConfirm;

    const payload = {
      _id: `user:${email}`,
      ...this.form.value,
    };

    await this.angularFire
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });

    await this.userService.postDoc(payload);

    this.closeModal();
  }

  private async editUser() {
    delete this.form.value.password;
    delete this.form.value.passwordConfirm;
    await this.projectsService.patchDoc(
      this.userValue$.value,
      this.form.value
    );
    this.closeModal();
  }
}
