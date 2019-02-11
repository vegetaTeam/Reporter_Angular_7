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
  private idUser = environment.trello.userName;


  constructor(private httpClient: HttpClient) {
  }

  /**Metodo para cargar la info de un board*/
  public loadBoard(subRoute) {

    let params = new HttpParams()
    .set('key', environment.trello.trelloAPIKey)
    .set('token', environment.trello.trelloToken);

    this.httpClient.get(`${environment.trello.urlsServices.getBoards + this.idUser + subRoute }`, {params} ).subscribe(
      response => {
        this.boardSubject.next(response)
      },
      error => {
        this.boardSubject.error(error);
      }
    )
    ;
  }

  /**Metodo para subscribirse a la carga de la info de un board+*/
  public getBoard(): Observable<any> {
    return this.boardSubject.asObservable();

  }

}
