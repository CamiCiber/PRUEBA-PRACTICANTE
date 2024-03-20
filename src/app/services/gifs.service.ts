import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroments/enviroment';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

//Constantes
const URL=enviroment.url_server;
const APIKEY=enviroment.api_key;
@Injectable({
  providedIn: 'root'
})
export class GifsService {
  //variables
  private _historial:string[]=[];
  resultados:Gif[]=[]

  get historial(){
  return [...this._historial]; 
  }

  constructor(private http:HttpClient) {
   }

   buscarGifs(query:string=''){

    //validacion para busquedas repetidas
    query=query.trim().toLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      //guardar 10 datos como max en historial
      this._historial=this._historial.splice(0,10);
    }

    const params=new HttpParams()
    .set('api_key',APIKEY)
    .set('limit',20)
    .set('q',query);

    this.http.get<SearchGifsResponse>(`${URL}`,{params})
    .subscribe(res=>{
      this.resultados=res.data;
    })
   }
}
