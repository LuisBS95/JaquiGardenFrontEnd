import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  Categorias: string[] = ['Hombres', 'Mujeres', 'Niños', 'Obsequios especiales', 'Iglesia','funerarios'];
  constructor() { }

  ngOnInit(): void {
  }

}
