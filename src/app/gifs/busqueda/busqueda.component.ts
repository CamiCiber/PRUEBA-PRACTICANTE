import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent implements OnInit{
 //solo trabaja con el INPUT
  @ViewChild('txtSearch') txtSearch!:ElementRef<HTMLInputElement>
 constructor(private gifsService:GifsService){

 }
  ngOnInit(): void {
    
  }
buscar(termino:string){
  const valor=this.txtSearch.nativeElement.value;
//quitar espacios en blanco con trim
  if(valor.trim().length===0){
    return;
  }
this.gifsService.buscarGifs(valor)
this.txtSearch.nativeElement.value='';
}
}
