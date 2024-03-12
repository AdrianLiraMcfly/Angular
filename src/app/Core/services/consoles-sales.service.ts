import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Root } from '../Interfaces/consoles-sales.interface';

@Injectable({
  providedIn: 'root'
})
export class ConsolesSalesService {

  constructor(private http: HttpClient) { }

  private url = 'http://127.0.1:8000/api/consoles/sales';

  getConsolesSales(): Observable<Root> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<Root>(this.url + "/index", {headers});
  }

  deleteConsoleSale(id: number): Observable<any> {
    return this.http.delete(this.url + "/destroy/" + id);
  }

  createConsoleSale(consoleSale: any): Observable<any> {
    return this.http.post(this.url + "/store", consoleSale);
  }

  updateConsoleSale(consoleSale: any, id: number): Observable<any> {
    return this.http.put(this.url + "/update/" + id, consoleSale);
  }

  getConsoleSale(id: number): Observable<any> {
    return this.http.get(this.url + "/show/" + id);
  }
  
}
