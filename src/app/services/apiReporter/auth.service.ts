import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }


  /**Metodo para autentificar a un usuario*/
  public authUser = (userId, userPass): Observable<any> => {

    let url = environment.apiReporter.url + '/login';
    let body = {Id: userId, pass: userPass};

    return this.httpClient.post(url, body);
  }

}
