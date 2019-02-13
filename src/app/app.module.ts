import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BoardsService} from "./services/APITrello/boards.service";
import {HttpClientModule} from "@angular/common/http";
import { NotFoundComponent } from './dashboard/not-found/not-found.component';
import {LoginComponent} from "./dashboard/login/login.component";
import {MainModule} from "./dashboard/main/main.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {MembersService} from "./services/APITrello/member.service";
import {ChartsModule} from "ng2-charts";
import { ModalsComponent } from './shared/modals/modals.component';
library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    ModalsComponent
  ],
  imports: [

    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MainModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule
  ],
  providers: [BoardsService, MembersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
