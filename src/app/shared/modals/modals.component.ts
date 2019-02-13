import {Component, Input, OnInit} from '@angular/core';
import {Modal} from "../../models/modals";
import {ModalsService} from "../../services/modalsService/modals.service";

@Component({
  selector: 'Reporter-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.sass']
})
export class ModalsComponent implements OnInit {

  @Input() public modalData: Modal;
  public openModal: boolean;

  constructor(private _modalsService: ModalsService) {
    this.openModal = false;
  }

  ngOnInit() {
  }

  /**Cerrar modal desde el botón de la propia modal*/
  public closeModal() {
    console.log('CLOSING');
    this._modalsService.hideModal()
  }


}
