import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../services/eventos.service';
import { Evento } from '../../models/eventos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
eventos : Evento[];

  constructor(private evService: EventosService) { 


    
  }

  ngOnInit(): void {
    this.evService.obtenerEventos().subscribe(e=>{
      this.eventos=e;
      console.log(this.eventos);
    })
  }

  

}
