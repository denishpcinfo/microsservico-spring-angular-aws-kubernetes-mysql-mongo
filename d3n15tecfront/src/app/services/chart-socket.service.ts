import { Injectable } from '@angular/core';
import { WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class ChartSocketService {

  private socket: WebSocketSubject<string>;

  constructor() {
    this.socket = new WebSocketSubject('ws://localhost:8080/chart-data-updates');
  }

  getUpdates() {
    return this.socket.asObservable();
  }
}
