import { Injectable } from '@angular/core';
import { ResponseProducts } from '../models/products.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ResponseProducts[]>{
    return this.http.get<ResponseProducts[]>('https://fakestoreapi.com/products');
  }
}
