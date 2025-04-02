import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../../../auth/services/auth.service';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-private-menu',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterLink,
    MatIconModule,
    RouterLinkActive
  ],
  templateUrl: './private-menu.component.html',
  styleUrl: './private-menu.component.scss'
})
export class PrivateMenuComponent {
    private readonly _authService = inject(AuthService);
    private readonly _routerLink = inject(Router);
    private readonly _activeRoute = inject(ActivatedRoute);
    public logout(): void {
        this._authService.logout();
    }

}
