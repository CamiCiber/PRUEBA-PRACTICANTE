import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  get historial(){
    return this.gifsService.historial;
  }

  constructor(private gifsService:GifsService){}
  
  ngOnInit(): void {
   
  }
  buscar(termino:string){
this.gifsService.buscarGifs(termino);
  }
}
