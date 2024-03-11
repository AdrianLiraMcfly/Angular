import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }
  registrarUsuario(usuario: any) {
    console.log(usuario);
  }

  getUsuarios() {
    return this.http.get(this.url);
  }
}
