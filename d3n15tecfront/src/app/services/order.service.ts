import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import {  API_URL_ORDER } from 'src/app/constants/url'; 
import { PedidoEditar } from '../shared/models/pedido-editar.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class OrderService implements OnDestroy {

  private apiUrl = API_URL_ORDER +'/pedido/';
  private destroy$ = new Subject<void>();

  constructor(private http: HttpClient,
              private toastr: ToastrService) { }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }    
          
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
    return this.http.put<any>(`${this.apiUrl}atualizar-pedido`, orderDetails)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: () => {
          this.toastr.success('Pedido atualizado com sucesso!');
      },
      error: (erro) => {
        this.toastr.error(erro.error.titulo, `Erro ${erro.error.status}!`);
      }
    });
  }
}
