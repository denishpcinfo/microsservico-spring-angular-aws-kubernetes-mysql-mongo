import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl = 'http://localhost:9093/api/profile'

  constructor(private http: HttpClient) { }

  public getProfileId(item: String) : Observable<any>{
    return this.http.get<User>(this.apiUrl + `/${item}`)
  }

}
