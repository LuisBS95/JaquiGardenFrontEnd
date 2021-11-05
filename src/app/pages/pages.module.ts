import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { ProductosComponent } from './productos/productos.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [HomeComponent, ProductosComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule
  ],
  exports:[
    ComponentsModule,
    HomeComponent
  ]
})
export class PagesModule { }
