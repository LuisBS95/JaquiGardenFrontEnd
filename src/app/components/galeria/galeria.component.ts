import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/productos';
import { Evento } from '../../models/eventos';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  productos: Producto[];
  @Input() evento:Evento;
  constructor(private productoService: ProductosService) {
  
   }

  ngOnInit(): void {
    this.productoService.obtenerProductosporEvento(this.evento.idEvento).subscribe(p=>{
      this.productos=p;
    })
  }
  

}
