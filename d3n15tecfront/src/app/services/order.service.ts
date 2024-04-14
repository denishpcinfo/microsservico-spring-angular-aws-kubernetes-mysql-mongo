import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  API_URL_Order, K8ExternalIp } from 'src/app/constants/url'; 

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  private apiUrl = API_URL_Order +'/pedido/salvar-pedido';

  constructor(private http: HttpClient) { }

  saveOrder(data: any):Observable<any>  {
    return this.http.post<any>(this.apiUrl, data);
  }
}
