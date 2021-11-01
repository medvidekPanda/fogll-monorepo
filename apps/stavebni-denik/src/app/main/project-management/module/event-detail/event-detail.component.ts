import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ModalController, ToastController } from '@ionic/angular';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DateTime } from 'luxon';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UsersListService } from 'src/app/main/users/service/users-list.service';
import { QueryResponse } from 'src/app/shared/model/query.model';
import { v4 as uuidv4 } from 'uuid';

import { UserInfo } from '../../../../shared/model/user.model';
import { DaySubEventFull } from '../../model/sub-event-detail.model';
import { DAY_SUB_EVENT_DETAIL } from '../../object/forms/day-sub-event-detail.object';
import { EventService } from '../../service/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss'],
})
export class EventDetailComponent implements OnInit {
  constructor(
    private eventService: EventService,
    private modalController: ModalController,
    public toastController: ToastController,
    private usersListService: UsersListService
  ) {}
  @Input() eventId: string;
  @Input() date: string;
  @Input() isNew?: boolean;
  @Input() event?: DaySubEventFull;

  form = new FormGroup({});
  fields: FormlyFieldConfig[] = DAY_SUB_EVENT_DETAIL;

  buttonDisabled$ = new BehaviorSubject<boolean>(true);

  users$ = this.usersListService
    .getItems$({ view: 'day-events/userList' })
    .pipe(
      map((result: QueryResponse<UserInfo>) => {
        if (result) {
          return result.rows.map((item) => {
            return {
              value: item.value._id,
              label: `${item.value.firstName} ${item.value.lastName}`,
            };
          });
        }

        return;
      }),
      tap((users) => {
        this.fields[1].templateOptions.options = users;
        this.fields[2].templateOptions.options = users;
      })
    );

  imgTest$ = new BehaviorSubject<string[] | undefined>([]);

  ngOnInit() {}

  onSaveClick() {
    this.isNew ? this.postDoc() : this.editDoc();
  }

  private async postDoc() {
    const payload: DaySubEventFull = {
      _id: `day-sub-event:${uuidv4()}`,
      title: this.form.value.title,
      parentEventId: this.eventId,
      author: this.form.value.author,
      description: this.form.value.description,
      createdDate: DateTime.now().toISO(),
      type: 'day-sub-event',
    };

    await this.eventService
      .postDoc(payload)
      .then(() => {
        this.modalController.dismiss();
        this.showToast('success', 'Záznam byl uložen v pořádku');
      })
      .catch((err) => {
        this.showToast('danger', err.message);
      });
  }

  private async editDoc() {
    await this.eventService
      .patchDoc(this.event, this.form.value)
      .then(() => {
        this.modalController.dismiss();
        this.showToast('success', 'Záznam byl uložen v pořádku');
      })
      .catch((err) => {
        this.showToast('danger', err.message);
      });
  }

  private async showToast(color?: string, message?: string) {
    const toast = await this.toastController.create({
      duration: 2000,
      color,
      message,
    });
    toast.present();
  }

  formChanged() {
    this.buttonDisabled$.next(this.form.invalid);
  }

  async takePicture() {
    const array = this.imgTest$.value;

    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    });

    array.push(image.webPath);

    this.imgTest$.next(array);
  }
}
