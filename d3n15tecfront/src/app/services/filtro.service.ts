import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL_UD, K8ExternalIp } from 'src/app/constants/url';
import { SearchCriteria } from '../shared/models/search-criteria.model';

@Injectable({
  providedIn: 'root'
})
export class FiltroService {

  private apiUrl = API_URL_UD +'/api/filtros/'; 

  constructor(private http: HttpClient) { }

  getFiltroUsuario(): Observable<any> {
    let bodyParams: SearchCriteria[] = [];

    return this.http.post<any>(this.apiUrl + 'usuarios', bodyParams);
  }
}
