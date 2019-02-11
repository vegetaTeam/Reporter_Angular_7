import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Reporter-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.sass']
})
export class AsideMenuComponent implements OnInit {

  public showMenu;

  constructor() { }

  ngOnInit() {

    this.showMenu = false;

  }

  public showHideMenu(){
    this.showMenu = !this.showMenu;
  }

}
