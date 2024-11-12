import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  API_URL_ORDER } from 'src/app/constants/url'; 
import { PedidoEditar } from '../shared/models/pedido-editar.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  private apiUrl = API_URL_ORDER +'/pedido/';

  constructor(private http: HttpClient,
              private toastr: ToastrService) { }

  saveOrder(data: any):Observable<any>  {
    return this.http.post<any>(this.apiUrl + 'salvar-pedido', data);
  }

  getAll(params: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'todos', { params });
  }

  getAllUser(params: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'todos-meus-pedidos', { params });
  }

  atualizar(orderDetails: PedidoEditar) {
    return this.http.put<any>(`${this.apiUrl}atualizar-pedido`, orderDetails)    .subscribe({
      next: () => {
          this.toastr.success('Pedido atualizado com sucesso!');
      },
      error: (erro) => {
        this.toastr.error(erro.error.titulo, `Erro ${erro.error.status}!`);
      }
    });
  }
}
