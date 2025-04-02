import { Injectable } from '@angular/core';
import { User } from '../../core/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public setUser(user: User): void {
    localStorage.setItem('usuario', JSON.stringify(user));
  }

  public getUser(): User | undefined {
    const usuario = localStorage.getItem('usuario');
    return usuario ? JSON.parse(usuario) : undefined;
  }

  public limpiaLocalStorage(): void {
    localStorage.clear();
  }
}
