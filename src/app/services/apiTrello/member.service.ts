import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})

/**Servicio para la obtencion de info y boards de un usuario*/
export class MembersService {

  constructor(private httpClient: HttpClient) {
  }

  /**Metodo para cargar la info de usuario*/
  public getMemberInfo = (userId): Observable<any> => {
    let url = environment.apiTrello.urlsServices.members + userId;
    return this.httpClient.get(url);
  }

}
