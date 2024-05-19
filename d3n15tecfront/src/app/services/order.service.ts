import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  API_URL_ORDER, K8ExternalIp } from 'src/app/constants/url'; 

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  private apiUrl = API_URL_ORDER +'/pedido/';

  constructor(private http: HttpClient) { }

  saveOrder(data: any):Observable<any>  {
    return this.http.post<any>(this.apiUrl + 'salvar-pedido', data);
  }

  getAll(params: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'todos', { params });
  }

  getAllUser(params: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'todos-meus-pedidos', { params });
  }
}
