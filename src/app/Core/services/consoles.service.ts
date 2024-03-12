import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Root } from '../Interfaces/console.interface';

@Injectable({
  providedIn: 'root'
})
export class ConsolesService {

  constructor(private http: HttpClient) { }

  private url= 'http://127.0.1:8000/api/consoles';

  getConsoles(): Observable<Root> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<Root>(this.url + "/index", {headers});
  }

  delateConsole(id: number): Observable<any> {
    return this.http.delete(this.url + "/destroy/" + id);
  }

  createConsole(console: any): Observable<any> {
    return this.http.post(this.url + "/store", console);
  }

  updateConsole(console: any, id: number): Observable<any> {
    return this.http.put(this.url + "/update/" + id, console);
  }

  getConsole(id: number): Observable<any> {
    return this.http.get(this.url + "/show/" + id);
  }
}
