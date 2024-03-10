import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:3000/users';

  constructor(private http: HttpClient ) { }

  registrerUser(user: any) {
    return this.http.post(this.url, user).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );

  }
}
