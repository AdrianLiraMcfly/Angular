import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Root } from '../Interfaces/games-orders.interface';

@Injectable({
  providedIn: 'root'
})
export class GamesOrdersService {

  constructor(private http: HttpClient) { }

  private url = 'http://127.0.1:8000/api/games/orders';

  getGamesOrders(): Observable<Root> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<Root>(this.url + "/index", {headers});
  }

  deleteGameOrder(id: number): Observable<any> {
    return this.http.delete(this.url + "/destroy/" + id);
  }

  createGameOrder(gameOrder: any): Observable<any> {
    return this.http.post(this.url + "/store", gameOrder);
  }

  updateGameOrder(gameOrder: any, id: number): Observable<any> {
    return this.http.put(this.url + "/update/" + id, gameOrder);
  }

  getGameOrder(id: number): Observable<any> {
    return this.http.get(this.url + "/show/" + id);
  }
  
}
