import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../models/productos';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[];
  eventoSelecionado: number;
  tipo:String;
  id:number;
  constructor( private productoService: ProductosService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params:Params)=>{
      this.id =params.id
      this.tipo=params.tipo;
      console.log("id: "+ this.id);
      console.log("tipo: "+this.tipo)
    
    })
   }

  ngOnInit(): void {
    if(this.tipo=='header'){
      this.obtenerProductosHeader();
    }
    if(this.tipo=='evento'){
      this.productoService.obtenerProductosporEvento(this.id).subscribe(p=>{
        this.productos=p;
      })
    }
  }
  obtenerProductosHeader(){
    this.productoService.obtenerProductos().subscribe(p=>{
      this.productos=p;
      console.log(this.productos);
  })
  }
}
