import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { Login } from '../Interfaces/login';
import { User } from '../Interfaces/user';
import { Observable } from 'rxjs';
import { Register } from '../Interfaces/register';
import { LoginResponse } from '../Interfaces/login-response';
import { VerifyCode } from '../Interfaces/verifyCode';
import { Root } from '../Interfaces/users.interface';
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

  Me(): Observable<User> {
    return this.http.get<User>('http://127.0.0.1:8000/api/auth/me');
  }


  getUser(): Observable<Root> {
    return this.http.get<Root>('http://127.0.0.1:8000/api/users/index');
  }

  deleteUser(id: number): Observable<HttpStatusCode> {
    return this.http.delete<HttpStatusCode>('http://127.0.0.1:8000/api/users/destroy/' + id);
  }

  verifyCode(data: VerifyCode): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('http://127.0.0.1:8000/api/auth/login', data);
  }

  updateUser(data: any, id: number): Observable<any> {
    return this.http.put<any>('http://127.0.0.1:8000/api/users/update/' + id, data);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>('http://127.0.0.1:8000/api/users/show/' + id);
  }
  
}
