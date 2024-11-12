import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_URL_FC } from 'src/app/constants/url'; 

@Injectable({
    providedIn: 'root'
})
export class FoodItemService {

  private apiUrl = API_URL_FC + '/catalogo-food/buscar-restaurante-food/';

    constructor(private http: HttpClient) { }

    getFoodItemsByRestaurant(id:number): Observable<any> {
      
        return this.http.get<any>(`${this.apiUrl+id}`)
          .pipe(
            catchError(this.handleError)
          );
      }
    
      private handleError(error: any) {
        return throwError(error.message || error);
      }

}