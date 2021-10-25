import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';


import { HeaderComponent } from './header/header.component';

import { FormsModule } from '@angular/forms';
import { BodyHomeComponent } from './body-home/body-home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './tarjeta/modal.component';
import { Tarjeta2Component } from './tarjeta2/tarjeta2.component';
import { Modal2Component } from './tarjeta2/modal2.component';




@NgModule({
  entryComponents:[
  ModalComponent
  ],
  declarations: [
    HeaderComponent, 
    BodyHomeComponent, 
    SidebarComponent, 
    CarruselComponent, 
    TarjetaComponent, 
    GaleriaComponent,
     FooterComponent, 
     ModalComponent, Tarjeta2Component, Modal2Component
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    BodyHomeComponent,
    GaleriaComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
