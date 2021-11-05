import { Component,Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Tarjeta2Component } from './tarjeta2.component';
import { Producto } from '../../models/productos';

@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.component.html',
  styleUrls: ['./modal2.component.css']
  
})
export class Modal2Component{
  photo='../../../assets/imagenes/carrusel/';
  constructor(public dialogRef: MatDialogRef<Tarjeta2Component>,
    @Inject(MAT_DIALOG_DATA) public producto: Producto) { 
      this.photo=this.photo + this.producto.imagen;
    }


onNoClick(): void {
this.dialogRef.close();
}
}
