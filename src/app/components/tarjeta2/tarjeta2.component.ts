import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Modal2Component } from './modal2.component';
import { Producto } from '../../models/productos';

@Component({
  selector: 'app-tarjeta2',
  templateUrl: './tarjeta2.component.html',
  styleUrls: ['./tarjeta2.component.css']
})
export class Tarjeta2Component implements OnInit {

  animal: string;
  name: string;
  photo = '../../../assets/imagenes/carrusel/';
  @Input() producto: Producto;

  constructor(public dialog: MatDialog) {
   
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(Modal2Component, {
      width: '650px',
      height: '600px',
      data: this.producto
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnInit(): void {
    console.log(this.producto)
    this.photo=this.photo + this.producto.imagen;
  }

}
