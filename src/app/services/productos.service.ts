import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url ='http://localhost:8080/producto/';
  constructor(private http: HttpClient) { }

  public obtenerProductosporEvento(id:number):Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url+"productoporEvento/"+id);

  }
  public obtenerProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url+"producto");
  }
}
