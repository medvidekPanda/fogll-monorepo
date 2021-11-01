import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import PouchDB from 'pouchdb';

@Injectable({
  providedIn: 'root',
})
export class DatabaseConfig {
  token$ = this.angularFire.idToken;
  constructor(private angularFire: AngularFireAuth) {}

  private async initializeDb() {
    const token = await firstValueFrom(this.token$);
    return new PouchDB('https://db.fogll.net:9998/project-test1', {
      fetch: (url, opts) => {
        opts.headers = [
          ['Accept', 'application/json'],
          ['Content-Type', 'application/json; charset=utf-8'],
          ['Authorization', `Bearer ${token}`],
        ];
        return PouchDB.fetch(url, opts);
      },
    });
  }

  async getDatabase(): Promise<PouchDB.Database> {
    return this.initializeDb();
  }
}
