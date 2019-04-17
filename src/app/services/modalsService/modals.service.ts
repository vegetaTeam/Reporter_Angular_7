import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Modal} from "../../shared/models/modals";

@Injectable({
  providedIn: 'root'
})
export class ModalsService {

  private modalSubject: Subject<any> = new Subject();

  constructor() { }

  public getModal(): Observable<any> {
    return this.modalSubject.asObservable();
  }

  /**Mostrar modal */
  public showModal(template: string) {

    let modalData: Modal = {
      showModal: true,
      template
    };

    this.modalSubject.next(modalData);
  }

  /**Ocultar Modal*/
  public hideModal() {

    let modalData: Modal = {
      showModal: false
    };

    this.modalSubject.next(modalData);
  }


}
