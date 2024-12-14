import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, takeUntil } from 'rxjs';
import { AtualizaRequest } from '../shared/models/atualiza-request.model';
import { ToastrService } from 'ngx-toastr';
import { API_URL_UD } from '../constants/url';

@Injectable({
  providedIn: 'root'
})
export class ProfileService implements OnDestroy {

  private apiUrl = API_URL_UD + '/profile'

  atualizaRequest: AtualizaRequest = {};
  private destroy$ = new Subject<void>();

  constructor(private http: HttpClient,
             private toastr: ToastrService ) { }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getProfileId(item: String): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl + `/${item}`)
  }

  atualizar(atualizaRequest: AtualizaRequest) {
    return this.http.put<any>(`${this.apiUrl}/atualizar-cadastro`, atualizaRequest)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: () => {
          this.toastr.success('Cadastro atualizado com sucesso!');
      },
      error: (erro) => {
        this.toastr.error(erro.error.titulo, `Erro ${erro.error.status}!`);
      }
    });
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/` + id)
  }
}
