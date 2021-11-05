import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasService } from '../../services/categorias.service';
import { Categoria } from '../../models/categoria';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  value = '';
  categorias:Categoria[];
  id=0;
  tipo='header';
  constructor(private route: Router,private serviceCate:CategoriasService) {
    this.serviceCate.obtenerCategorias().subscribe(c=>{
      this.categorias=c;
      console.log(this.categorias);
    })
   }

  ngOnInit(): void {
  }
  irProductos(){
    this.route.navigateByUrl("/productos/"+this.tipo+"/"+this.id)
  }
}
