import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../shared/models/user.model';
import { AtualizaRequest } from '../shared/models/AtualizaRequest';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl = 'http://localhost:9093/api/profile'

  atualizaRequest: AtualizaRequest = {};
  atualizaResponse: AtualizaRequest = {};

  constructor(private http: HttpClient,
             private toastr: ToastrService ) { }

  public getProfileId(item: String) : Observable<any>{
    return this.http.get<User>(this.apiUrl + `/${item}`)
  }


  atualizar(atualizaRequest: AtualizaRequest) {

    console.log("atualizaRequest")
    console.log(atualizaRequest)

    return this.http.put<any>(`${this.apiUrl}/atualizar-cadastro`, atualizaRequest)
    .subscribe({
      next: (atualiza) => {
        if (this.atualizaResponse) {
          this.atualizaResponse = atualiza;
          this.toastr.success('Cadastro atualizado com sucesso!');
        }
      }
      // ,
      // error: (erro) => {
      //   this.toastr.error(erro.error.titulo, `Erro ${erro.error.status}!`);
      // }
    });
  }
}
