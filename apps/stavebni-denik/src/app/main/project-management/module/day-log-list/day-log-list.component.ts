import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { QueryResponse } from 'src/app/shared/model/query.model';
import { ProjectsService } from 'src/app/shared/service/projects.service';

import { DayEventBase } from '../../model/day-event-base.model';
import { EventsListService } from '../../service/events-list.service';

@Component({
  selector: 'app-day-log-list',
  templateUrl: './day-log-list.component.html',
  styleUrls: ['./day-log-list.component.scss'],
})
export class DayLogListComponent {
  private reload$ = new BehaviorSubject<void>(undefined);

  private projectId$ = this.activatedRoute.params.pipe(
    map((routeParams) => {
      return routeParams.id;
    })
  );

  items$ = this.reload$.pipe(
    switchMap(() => {
      return this.projectId$.pipe(
        switchMap((projectId) => {
          const dbQuery = {
            view: 'day-events/list',
            options: { key: projectId },
          };
          return this.eventsListService.getItems$(dbQuery).pipe(
            filter(Boolean),
            map((result: QueryResponse<DayEventBase>) => {
              return result.rows.map((item) => {
                return {
                  _id: item.value._id,
                  _rev: item.value._rev,
                  type: item.value.type,
                  date: item.value.date,
                };
              });
            })
          );
        })
      );
    })
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventsListService: EventsListService,
    public modalController: ModalController,
    private router: Router
  ) {}

  async deteteItem(item: Partial<DayEventBase>) {
    const doc = { _id: item._id, _rev: item._rev };

    await this.eventsListService
      .removeDoc(doc)
      .then((response) => {
        console.log('response component', response);
      })
      .catch((err) => {
        console.log('error component', err);
      });

    this.reloadList();
  }

  reloadList(event?: any) {
    this.reload$.next();
    if (event) {
      event.target.complete();
    }
  }

  showDetail(eventId: string) {
    this.router.navigate(['event-detail'], {
      relativeTo: this.activatedRoute,
      queryParams: { eventId },
    });
  }

  addNewDayValue() {
    this.router.navigate(['event-add'], { relativeTo: this.activatedRoute });
  }
}
