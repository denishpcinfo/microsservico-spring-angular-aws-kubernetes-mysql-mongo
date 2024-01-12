import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  private apiUrl = 'http://localhost:9093/api/profile'

  constructor( private http: HttpClient ) { }

  public getProfileId(item: String) {
    return this.http.get(this.apiUrl + `/${item}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error.message || error);
  }
}
