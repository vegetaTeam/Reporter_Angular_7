import {Component, OnInit} from '@angular/core';
import {ModalsService} from "./services/modalsService/modals.service";
import {Modal} from "./shared/models/modals";

@Component({
  selector: 'Reporter-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  public modalData: Modal;

  constructor(private _modalsService: ModalsService) {

  }

  ngOnInit() {

    /**Servicio global de modales*/
    this._modalsService.getModal().subscribe(
      (next) => {
        console.log(next);
        this.modalData = next;
      }
    )
  }

}
