import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../models/eventos';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  url ='http://localhost:8080/evento/';
  eventos:Evento[];

  constructor(private http: HttpClient) { 
     
    }

obtenerEventos():Observable<Evento[]>{
  return this.http.get<Evento[]>(this.url+'listar');
  
}
  
}
