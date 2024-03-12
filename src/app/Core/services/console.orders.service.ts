import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Root } from '../Interfaces/console.orders.interface';

@Injectable({
  providedIn: 'root'
})
export class ConsoleOrdersService {

  private url = 'http://127.0.1:8000/api/console/orders';
  constructor(private http:HttpClient) { }

  getConsoleOrders(): Observable<Root> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<Root>(this.url + "/index", {headers});
  }

  deleteConsoleOrder(id: number): Observable<any> {
    return this.http.delete(this.url + "/destroy/" + id);
  }

  createConsoleOrder(consoleOrder: any): Observable<any> {
    return this.http.post(this.url + "/store", consoleOrder);
  }

  updateConsoleOrder(consoleOrder: any, id: number): Observable<any> {
    return this.http.put(this.url + "/update/" + id, consoleOrder);
  }

  getConsoleOrder(id: number): Observable<any> {
    return this.http.get(this.url + "/show/" + id);
  }
}
