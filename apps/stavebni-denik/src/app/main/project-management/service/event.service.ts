import { Injectable } from '@angular/core';
import { DatabaseBaseService } from 'src/app/shared/service/database-base.service';

@Injectable({
  providedIn: 'root',
})

export class EventService extends DatabaseBaseService {}
