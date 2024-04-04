import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL_UD, K8ExternalIp } from 'src/app/constants/url';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = API_URL_UD +'/api/users/'; 

  constructor(private http: HttpClient) { }

  getAll(params: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'todos-usuarios', { params });
  }

}
