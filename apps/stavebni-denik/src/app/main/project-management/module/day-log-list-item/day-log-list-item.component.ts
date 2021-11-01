import { Component, Input } from '@angular/core';

import { DayEventBase } from '../../model/day-event-base.model';

@Component({
  selector: 'app-day-log-list-item',
  templateUrl: './day-log-list-item.component.html',
  styleUrls: ['./day-log-list-item.component.scss'],
})
export class DayLogListItemComponent {
  @Input() item: Partial<DayEventBase>;
}
