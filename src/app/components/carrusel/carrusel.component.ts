import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  objetos = [{url: '../../../assets/imagenes/carrusel/taz1.jpg', descripcion: ' Es un taz', nombre: 'Taz1',active:true},{url: '../../../assets/imagenes/carrusel/taz2.jpg', descripcion: ' Es un taz', nombre: 'Taz2', active: false},
  {url: '../../../assets/imagenes/carrusel/taz3.jpg', descripcion: ' Es un taz', nombre: 'Taz3',active:false}];

  constructor() { }

  ngOnInit(): void {
  }

}
