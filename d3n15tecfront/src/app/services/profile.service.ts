import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user.model';
import { AtualizaRequest } from '../shared/models/atualizaRequest.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl = 'http://localhost:9093/api/profile'

  atualizaRequest: AtualizaRequest = {};

  constructor(private http: HttpClient,
             private toastr: ToastrService ) { }

  getProfileId(item: String): Observable<any>{
    return this.http.get<User>(this.apiUrl + `/${item}`)
  }

  atualizar(atualizaRequest: AtualizaRequest) {
    return this.http.put<any>(`${this.apiUrl}/atualizar-cadastro`, atualizaRequest)
    .subscribe({
      next: (atualiza) => {
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
