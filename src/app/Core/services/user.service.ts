import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { Login } from '../Interfaces/login';
import { User } from '../Interfaces/user';
import { Observable } from 'rxjs';
import { Register } from '../Interfaces/register';
import { LoginResponse } from '../Interfaces/login-response';
import { VerifyCode } from '../Interfaces/verifyCode';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  
  registrarUsuario(data: Register): Observable<User> {
    return this.http.post<User>('http://127.0.0.1:8000/api/auth/register', data);

  }

  loginUsuario(data: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('http://127.0.0.1:8000/api/auth/login', data);
    
  }


  getUser() {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    console.log(headers);
    return this.http.get('http://127.0.0.1:8000/api/user', {headers});
  }

  verifyCode(data: VerifyCode): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('http://127.0.0.1:8000/api/auth/login', data);
  }
}
