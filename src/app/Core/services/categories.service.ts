import { Injectable } from '@angular/core';
import { Root } from '../Interfaces/games.interfaces';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }

  private url = 'http://127.0.1:8000/api/categories';

  getCategories(){
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<Root>(this.url + "/index", {headers});
  }

  deleteCategory(id: number){
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.delete(this.url + "/destroy/" + id, {headers});
  }
}
