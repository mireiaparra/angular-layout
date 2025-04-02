import { Routes } from '@angular/router';
import { authGuard } from './auth/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./sections/public/public-sections.module').then(
        (m) => m.PublicSectionsModule
      ),
  },
  {
    path: 'sections',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./sections/private/private-sections.module').then(
        (m) => m.PrivateSectionsModule
      ),
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];
