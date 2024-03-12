import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Root } from '../Interfaces/games-sales.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GamesSalesService {

  constructor(private http:HttpClient) { }

  private url = 'http://127.0.1:8000/api/games/sales';

  getGamesSales(): Observable<Root> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<Root>(this.url + "/index", {headers});
  }

  deleteGameSale(id: number): Observable<any> {
    return this.http.delete(this.url + "/destroy/" + id);
  }

  createGameSale(gameSale: any): Observable<any> {
    return this.http.post(this.url + "/store", gameSale);
  }

  updateGameSale(gameSale: any, id: number): Observable<any> {
    return this.http.put(this.url + "/update/" + id, gameSale);
  }

  getGameSale(id: number): Observable<any> {
    return this.http.get(this.url + "/show/" + id);
  }


}
