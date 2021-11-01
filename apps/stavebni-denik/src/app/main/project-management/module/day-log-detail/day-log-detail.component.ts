import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { QueryRows } from 'src/app/shared/model/query.model';

import { DayEventBase } from '../../model/day-event-base.model';
import { DaySubEventFull } from '../../model/sub-event-detail.model';
import { DAY_EVENT_ADD } from '../../object/forms/day-event-add.object';
import { EventService } from '../../service/event.service';
import { EventDetailComponent } from '../event-detail/event-detail.component';

@Component({
  selector: 'app-day-log-detail',
  templateUrl: './day-log-detail.component.html',
  styleUrls: ['./day-log-detail.component.scss'],
})
export class DayLogDetailComponent {
  private reload$ = new BehaviorSubject<void>(undefined);

  private selectedEvent$: Observable<string> = this.activatedRoute.queryParams.pipe(
    filter(eventId => Object.keys(eventId).length > 0),
    map(paramMap => {
      return paramMap.eventId;
    }),
  );

  eventInfo$ = this.selectedEvent$.pipe(
    switchMap(eventId => {
      return this.eventService.getItem$(eventId).pipe(
        take(1),
        map((item: DayEventBase) => {
          return {
            date: item.date,
            eventId: item._id,
          };
        }),
      );
    }),
  );

  daySubEvents$ = this.reload$.pipe(
    switchMap(() => {
      return this.selectedEvent$.pipe(
        switchMap(eventId => {
          const dbQuery = {
            view: 'day-events/listDaySub',
            options: { key: eventId },
          };
          return this.eventService.getItems$(dbQuery).pipe(
            map((result => {
              if (result.rows.length === 0) {
                return undefined;
              }

              return result.rows.map((item: QueryRows<DaySubEventFull>) => {
                return {
                  _id: item.value._id,
                  _rev: item.value._rev,
                  type: item.value.type,
                  parentEventId: item.value.parentEventId,
                  title: item.value.title,
                  author: item.value.author,
                  description: item.value.description,
                  createdDate: item.value.createdDate,
                  editDate: item.value.editDate,
                };
              });
            }),
            ));
        }),
      );
    })
  );

  viewType = 'info';

  dayEvent = new FormGroup({});
  fields: FormlyFieldConfig[] = DAY_EVENT_ADD;

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventService: EventService,
    private location: Location,
    private modalController: ModalController,
  ) { }

  // this components should be merged together with add day event

  toggleEditMode(event) {
    if (event.detail.checked) {
      this.dayEvent.enable();
    } else {
      this.dayEvent.disable();
    }
  }

  async onSaveClick(item: DayEventBase) {
    await this.eventService.patchDoc(item, this.dayEvent.value).then(() => {
      this.dayEvent.disable();
      this.goBack();
    }).catch(err => {
      console.log(err);
    });
  }

  segmentChanged(event) {
    this.viewType = event.detail.value;
    this.dayEvent.disable();
  }

  private goBack() {
    this.location.back();
  }

  async addNewEvent({ eventId, date, isNew, event }: { eventId?: string, date?: string, isNew?: boolean, event?: DaySubEventFull }) {
    const modal = await this.modalController.create({
      component: EventDetailComponent,
      componentProps: {
        eventId,
        date,
        isNew,
        event,
      }
    });

    modal.onDidDismiss().then(() => {
      this.reload$.next();
    });

    return await modal.present();
  }

  async deteteItem(item: Partial<DayEventBase>) {
    const doc = { _id: item._id, _rev: item._rev };

    await this.eventService.removeDoc(doc).then(response => {
      console.log('response component', response);
    }).catch(err => {
      console.log('error component', err);
    });

    this.reload$.next();
  }
}
