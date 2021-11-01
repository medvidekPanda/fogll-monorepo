import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Injectable()
export class AuthAppService {
  constructor(
    private angularFire: AngularFireAuth,
    private router: Router,
    public toastController: ToastController
  ) {}

  async loging(email: string, password: string) {
    await this.angularFire
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.showToast('success', 'Přihlášení úspěšné');
        this.router.navigate(['/app']);
      })
      .catch((err) => {
        this.showToast('danger', err.message);
        console.log('err', err);
      });
  }

  logout() {
    this.angularFire.signOut();
    this.goToLoginPage();
  }

  isLogged$(): Observable<boolean> {
    return this.angularFire.idToken.pipe(map((value) => Boolean(value)));
  }

  loggedUserEmail$() {
    return this.angularFire.user.pipe(
      filter(Boolean),
      tap((item) => console.log('logged', item)),
      map((user) => {
        return user.email;
      })
    );
  }

  private goToLoginPage() {
    this.router.navigate(['/login-page']);
  }

  private async showToast(color?: string, message?: string) {
    const toast = await this.toastController.create({
      duration: 2000,
      color,
      message,
    });
    toast.present();
  }
}
