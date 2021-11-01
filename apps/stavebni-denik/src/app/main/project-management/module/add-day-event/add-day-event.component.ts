import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DateTime } from 'luxon';
import { DatabaseBaseService } from 'src/app/shared/service/database-base.service';

import { DayEventBase } from '../../model/day-event-base.model';
import { DAY_EVENT_ADD } from '../../object/forms/day-event-add.object';

@Component({
  selector: 'app-add-day-event',
  templateUrl: './add-day-event.component.html',
  styleUrls: ['./add-day-event.component.scss'],
})
export class AddDayEventComponent {
  // this component should be merged with detail event component

  dayEvent = new FormGroup({});
  fields: FormlyFieldConfig[] = DAY_EVENT_ADD;
  model = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private databaseBaseService: DatabaseBaseService,
    private location: Location
  ) {}

  async addEvent() {
    const date = DateTime.now().toFormat('yyyymmdd');
    const projectId = this.activatedRoute.snapshot.params.id;
    const payload: DayEventBase = {
      _id: `day-event:${projectId}-${date}`,
      type: 'day-event',
      key: projectId,
      projectId,
      ...this.dayEvent.value,
    };

    await this.databaseBaseService
      .postDoc(payload)
      .then((response) => {
        console.log(response);
        this.goBack();
      })
      .catch(() => {});
  }

  goBack() {
    this.location.back();
  }
}
