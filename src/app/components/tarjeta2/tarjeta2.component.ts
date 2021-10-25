import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Modal2Component } from './modal2.component';

@Component({
  selector: 'app-tarjeta2',
  templateUrl: './tarjeta2.component.html',
  styleUrls: ['./tarjeta2.component.css']
})
export class Tarjeta2Component implements OnInit {

  animal: string;
  name: string;
  photo = '../../../assets/imagenes/carrusel/taz2.jpg';
  cosas=[1,2,3,4,5,6];

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(Modal2Component, {
      width: '650px',
      height: '600px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnInit(): void {
  }

}
