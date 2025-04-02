import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrivateMenuComponent } from './shared/components/private-menu/private-menu.component';
import { PublicMenuComponent } from './shared/components/public-menu/public-menu.component';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/services/auth.service';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PrivateMenuComponent,
    PublicMenuComponent,
    CommonModule,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public authService = inject(AuthService);
}
