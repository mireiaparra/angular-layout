import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AboutUsComponent } from "./about-us/about-us.component";
import { HomeComponent } from "./home/home.component";
import { PublicSectionsRoutingModule } from "./public-sections.routing";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [


  ],
  imports: [
     CommonModule,
     AboutUsComponent,
     LoginComponent,
     HomeComponent,
     PublicSectionsRoutingModule,
  ],
})
export class PublicSectionsModule {}