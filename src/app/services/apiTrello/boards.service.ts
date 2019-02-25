import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})

/**Servicio para la obtencion de la info de boards*/
export class BoardsService {

  public boardSubject = new Subject();
  private params = new HttpParams()
    .set('key', localStorage.getItem('apiT'))
    .set('token', localStorage.getItem('tokenT'));


  constructor(private httpClient: HttpClient) {
  }

  /**Metodos principales http*/
  private httpGET(url, params?){

    this.httpClient.get(url,{params} ).subscribe(
      response => {
        this.boardSubject.next(response)
      },
      error => {
        this.boardSubject.error(error);
      }
    );
  }

  /**Metodo para subscribirse a la carga de la info de un board*/
  public subscriptionBoardService(): Observable<any> {
    return this.boardSubject.asObservable();

  }

  /**Metodo para cargar todos los boards de un miembro*/
  public getAllBoardsMember(userId) {

    let url = environment.apiTrello.urlsServices.members + userId + '/boards';
    this.httpGET(url , this.params);

  }

  /**Metodo para cargar la info de un board concreto*/
  public getOneBoard(boardId) {

    let url = environment.apiTrello.urlsServices.boards + boardId;
    this.httpGET(url , this.params);

  }



}
