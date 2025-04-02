import { inject, Injectable } from '@angular/core';
import { User } from '../../core/interfaces/user.interface';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
private readonly _storageService = inject(StorageService);
private readonly _routerLink = inject(Router);
  public login(email: string, password: string): Observable<boolean> {
    if (email === 'master@lemoncode.net' && password === '12345678') {
      this._storageService.setUser({ email, password });
      return of(true).pipe(delay(2000));
    }
    return of(false).pipe(delay(2000));
  }

  public logout(): void {
    this._storageService.limpiaLocalStorage();
    this._routerLink.navigate(['/']);
  }

  public isLogged(): boolean {
    return !!this._storageService.getUser();
  }

  public getUsername(): string | undefined {
    return this._storageService.getUser()?.email;
  }
}
