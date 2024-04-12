import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { API_URL_RL, K8ExternalIp } from 'src/app/constants/url';
import { Restaurant } from '../shared/models/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private apiUrl = API_URL_RL +'/restaurant/'; 
  public Restaurantes;

  constructor(private http: HttpClient) { }

  getAllRestaurants(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}` + 'fetchAllRestaurants')
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    return throwError(error.message || error);
  }

  getAll(params: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'pageAllRestaurants', { params });
  }


  private get restaurantes(): Observable<Restaurant[]> {
    return this.Restaurantes = this.http.get<Restaurant[]>(this.apiUrl + 'slaider');
  }


  public get getRestaurantesCarrossel(): Observable<Restaurant[]> {
    return this.restaurantes;
  }

}
