import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})

/**Servicio para la obtencion de info y boards de un usuario*/
export class MembersService {

  private idUser = environment.trello.userName;
  private membersUrl = environment.trello.urlsServices.members + this.idUser;

  constructor(private httpClient: HttpClient) {
  }

  /**Metodo para cargar la info de usuario*/
  public getMemberInfo = (): Observable<any> => {
    return this.httpClient.get(this.membersUrl);
  }

}
