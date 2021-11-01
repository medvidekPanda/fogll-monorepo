import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { QueryDb, QueryResponse } from '../model/query.model';
import { DatabaseConfig } from './database-config.service';
@Injectable({
  providedIn: 'root',
})
export abstract class DatabaseBaseService {
  private dbQuery$ = new Subject<QueryResponse<any>>();
  private dbItem$ = new Subject<PouchDB.Core.IdMeta & PouchDB.Core.GetMeta>();
  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(protected databaseConfig: DatabaseConfig) {}

  getItems$(query: QueryDb): Observable<QueryResponse<any>> {
    this.isLoading$.next(true);
    this.loadDbItems(query);
    return this.dbQuery$.asObservable();
  }

  getItem$(id: string) {
    this.isLoading$.next(true);
    this.loadDbDoc(id);
    return this.dbItem$.asObservable();
  }

  async patchDoc<R>(item: R, dayEvent: R) {
    const payload = this.updateDoc(item, dayEvent);
    return await this.databaseConfig.getDatabase().then((database) => {
      return database.put(payload);
    });
  }

  async postDoc<R>(item: R) {
    const request = await this.databaseConfig.getDatabase().then((database) => {
      return database.post(item);
    });

    return request;
  }

  async removeDoc(doc: { _id: string; _rev: string }) {
    return await this.databaseConfig.getDatabase().then((database) => {
      return database.remove(doc);
    });
  }

  removeDocBulk(query: QueryDb) {
    // this.databaseConfig
    //   .getDatabase()
    //   .query(query.view, query.options)
    //   .then((response) => {
    //     const test = response.rows.map((row) => {
    //       return {
    //         _id: row.id,
    //         _rev: row.value._rev,
    //         _deleted: true,
    //       };
    //     });
    //   })
    //   .catch((err) => {
    //     console.log('bulk', err);
    //   });
  }

  private async loadDbItems(query: QueryDb) {
    await this.databaseConfig.getDatabase().then((database) => {
      database
        .query(query.view, query.options)
        .then((response) => {
          this.dbQuery$.next(response);
        })
        .catch((err) => {
          console.log('err', err);
        })
        .finally(() => {
          this.isLoading$.next(false);
        });
    });
  }

  private async loadDbDoc(id: string) {
    const database = await this.databaseConfig.getDatabase();
    database
      .get(id)
      .then((response) => {
        console.log('response', response);
        this.dbItem$.next(response);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.isLoading$.next(false);
      });
  }

  private updateDoc<R>(item: Partial<R>, dayEvent: R) {
    return { ...item, ...dayEvent };
  }
}
