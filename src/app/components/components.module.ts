import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { BodyHomeComponent } from './body-home/body-home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CarruselComponent } from './carrusel/carrusel.component';




@NgModule({
  declarations: [HeaderComponent, BodyHomeComponent, SidebarComponent, CarruselComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [HeaderComponent,
  BodyHomeComponent]
})
export class ComponentsModule { }
