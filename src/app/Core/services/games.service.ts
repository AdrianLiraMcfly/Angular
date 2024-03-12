import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Root } from '../Interfaces/games.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  private url= 'http://127.0.0.1:8000/api/games';

  getGames(): Observable<Root> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<Root>(this.url + "/index", {headers});
  }

  delateGame(id: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.delete(this.url + "/destroy/" + id, {headers});
  }

  createGame(game: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post(this.url + "/store", game, {headers});
  }

  updateGame(game: any, id: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.put(this.url + "/update/" + id, game, {headers});
}
}