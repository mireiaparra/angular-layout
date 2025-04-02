import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { of } from 'rxjs';
import { StorageService } from '../services/storage.service';

export const authGuard: CanMatchFn = (route, segments) => {
  const storageService: StorageService = inject(StorageService);
  const loggedUser = storageService.getUser();
  if (loggedUser) {
    return of(true);
  } else {
    storageService.limpiaLocalStorage();
    return of(false);
  }
};
