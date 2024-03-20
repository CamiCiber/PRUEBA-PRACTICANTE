import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent implements OnInit{

  get resultados(){
    return this.gifsService.resultados;
  }

  constructor(private gifsService:GifsService){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
