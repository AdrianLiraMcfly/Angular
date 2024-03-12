import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Root } from '../Interfaces/suppliers.interfaces';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  constructor(private http: HttpClient) { }

  private url= 'http://127.0.1:8000/api/suppliers';

  getSuppliers(): Observable<Root> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<Root>(this.url + "/index", {headers});
  }

  deleteSupplier(id: number): Observable<any> {
    return this.http.delete(this.url + "/destroy/" + id);
  }

  createSupplier(supplier: any): Observable<any> {
    return this.http.post(this.url + "/store", supplier);
  }

  updateSupplier(supplier: any, id: number): Observable<any> {
    return this.http.put(this.url + "/update/" + id, supplier);
  }

  getSupplier(id: number): Observable<any> {
    return this.http.get(this.url + "/show/" + id);
  }
}
