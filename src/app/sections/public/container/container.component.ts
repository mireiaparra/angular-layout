import { Component } from '@angular/core';
import { PublicHeaderComponent } from "../../../shared/components/header/header.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {

}
