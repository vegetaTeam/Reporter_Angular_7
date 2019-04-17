import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'Reporter-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.sass']
})
export class HeadComponent implements OnInit {

  public isToggleActive: boolean = false;
  public user;

  constructor(private router: Router) { }

  ngOnInit() {}

  /**
   * Muestra o oculta el toogle asignandole el valor contrario que tenga el isToggleActive.
   */
  public swToggle() {
    this.isToggleActive = !this.isToggleActive;
  }

  /**
   * Logout de la app
   * */
  public logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }

}
