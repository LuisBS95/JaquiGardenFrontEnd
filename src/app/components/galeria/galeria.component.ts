import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  a= [1,1,23,3,3,3];
  constructor() { }

  ngOnInit(): void {
  }

}
