import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './gifs/busqueda/busqueda.component';
import { GifsPageComponent } from './gifs/gifs-page/gifs-page.component';
import { HistorialComponent } from './gifs/historial/historial.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
//    GifsPageComponent,
    //HistorialComponent,
    //NavbarComponent,
    //SidebarComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    GifsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
