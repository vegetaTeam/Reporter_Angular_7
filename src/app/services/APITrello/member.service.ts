import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})

/**Servicio para la obtencion de info y boards de un usuario*/
export class MembersService {

  public memberSubject = new Subject();
  private idUser = environment.trello.userName;


  constructor(private httpClient: HttpClient) {
  }

  /**Metodo para cargar la info de usuario*/
  public loadMemberInfo() {


    this.httpClient.get(`${environment.trello.urlsServices.getMemberInfo + this.idUser }`).subscribe(
      response => {
        this.memberSubject.next(response)
      },
      error => {
        this.memberSubject.error(error);
      }
    )
    ;
  }

  /**Metodo para subscribirse a la carga de la info de un usuario*/
  public getMemberInfo(): Observable<any> {
    return this.memberSubject.asObservable();

  }

}
