import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChartDataService {

  private apiUrl = 'http://localhost:9094/api/chart-data';

  constructor(private http: HttpClient) {}
  
  getOrdersByStatus(status: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/by-status?statusPedido=${status}`);
  }
  
}
