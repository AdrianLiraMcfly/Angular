import { Injectable } from '@angular/core';
import { Root } from '../Interfaces/games.interfaces';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }

  private url = 'http://127.0.1:8000/api/categories';

  getCategories(){
    return this.http.get<Root>(this.url + "/index");
  }

  deleteCategory(id: number){
    return this.http.delete(this.url + "/destroy/" + id);
  }

  createCategory(category: any){
    return this.http.post(this.url + "/store", category);
  } 

  getCategory(id: number){
    return this.http.get(this.url + "/show/" + id);
  }

  updateCategory(category: any, id: number):Observable<any>{
    return this.http.put(this.url + "/update/" + id, category);
  }



}
