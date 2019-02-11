import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import {RouterModule} from "@angular/router";
import {HeadComponent} from "../../shared/head/head.component";
import { HomeComponent } from './home/home.component';
import {AsideMenuComponent} from "../../shared/aside-menu/aside-menu.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FooterComponent} from "../../shared/footer/footer.component";

@NgModule({
  imports: [
    MainRoutingModule,
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  declarations: [MainComponent, HeadComponent,HomeComponent, FooterComponent, AsideMenuComponent]
})
export class MainModule { }
