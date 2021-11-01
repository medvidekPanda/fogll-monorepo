import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage {
  readonly animated = false;
  projects$ = this.activatedRoute.data.pipe(
    map((response) => {
      return response.projects;
    }),
    tap((projects) => {
      const projectId = projects[0].projectId;
      Storage.set({
        key: 'projectId',
        value: projectId,
      });
      this.goToApp(projectId);
    })
  );
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  private goToApp(id: string) {
    this.router.navigate([`app/project-management/${id}`]);
  }
}
