import { Injectable } from '@angular/core';
import { HttpClient, HttpStatusCode } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  registrarUsuario(usuario: any) {
    return this.http.post('http://127.0.0.1:8000/api/auth/register', usuario);

  }

  loginUsuario(usuario: any) {
    return this.http.post('http://127.0.0.1:8000/api/auth/login', usuario);
  }

  getUser() {
    return this.http.get('http://127.0.0.1:8000/api/user');
  }
}
