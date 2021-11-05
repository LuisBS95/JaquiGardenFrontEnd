import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../services/eventos.service';
import { Evento } from '../../models/eventos';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  Categorias: string[] = ['Hombres', 'Mujeres', 'Niños', 'Obsequios especiales', 'Iglesia','funerarios'];

  indice: Evento[];
  constructor(private eventoService: EventosService,private route:Router) {
    this.getIndice();
    
   }

  ngOnInit(): void {
  }
  getIndice(){
  this.eventoService.obtenerEventos().subscribe(e=>{
    this.indice=e;
  })
  }

  irProductos(id:number){
    this.route.navigateByUrl("/productos/evento/"+id)
  }

}
