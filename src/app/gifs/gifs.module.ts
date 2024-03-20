import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { HistorialComponent } from './historial/historial.component';



@NgModule({
  declarations: [
    BusquedaComponent,
    GifsPageComponent,
    HistorialComponent
  ],
  imports:[
    CommonModule
  ],
  exports:[
    GifsPageComponent
  ]

})
export class GifsModule { }
