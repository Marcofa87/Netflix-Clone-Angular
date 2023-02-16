import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  wsAuthorize: string =
    'http://api.labforweb.it:8080/backend/web/index.php/1/authorize';

    httpOptions = {

      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    authorize(user:any):Observable<any>{
      return this.http.post(this.wsAuthorize, user, this.httpOptions)
    }

    wsGetAccessToken:string= "http://api.labforweb.it:8080/backend/web/index.php/1/accesstoken"

    getAccessToken(auth_code:any):Observable<any>{
      return this.http.post(this.wsGetAccessToken, auth_code, this.httpOptions)
    }

    wsGetUserInformation:string="http://api.labforweb.it:8080/backend/web/index.php/1/me"

    getUserInformation(str:any):Observable<any>{
      //{accessToken:6a91c507c4092451a050c3c2ba9f97fdYWRtaW4=}
      const strAccessToken:any = Object.values(str)[0] //valore compreso gli 8 caratteri del ruolo
      const accesstoken = strAccessToken.slice(0, -8); //l'access token da passare dentro l'header
      console.log(accesstoken)
      const httpOptions1={
        headers: new HttpHeaders(
          {"X-Access-Token": accesstoken})
      }
      return this.http.get(this.wsGetUserInformation,httpOptions1)
    }
    

}
