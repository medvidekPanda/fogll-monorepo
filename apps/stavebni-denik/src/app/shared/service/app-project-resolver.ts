import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { ProjectsService } from './projects.service';

@Injectable()
export class AppProjectsResolver implements Resolve<any> {
  constructor(private projectsService: ProjectsService) {}

  resolve(): Observable<any> {
    return this.projectsService
      .getItems$({ view: 'day-events/projectList' })
      .pipe(
        take(1),
        map((projects) => {
          return projects.rows.map((project) => project.value);
        })
      );
  }
}
