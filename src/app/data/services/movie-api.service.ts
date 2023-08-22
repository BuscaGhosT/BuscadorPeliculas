
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Constants } from 'src/app/config/constants';
import { Observable } from 'rxjs';

@Injectable()
export class MovieApiService {

    // Inyection (private)
    constructor(private constants : Constants, private http:HttpClient) { 

    }

    // Películas Recientes
    getEstrenos(fechaAnterior:string, fechaActual:string) : Observable<Object>{
    
        let url=`${this.constants.API_ENDPOINT}/discover/movie?api_key=${this.constants.API_KEY}&language=es&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${fechaAnterior}&primary_release_date.lte=${fechaActual}&callback=JSONP_CALLBACK`
        return this.http.jsonp(url, "");

      }

    // Filtro Peliculas
    getPeliculasFiltradas(textoBuscar: string) : Observable<Object>{

      let url=`${this.constants.API_ENDPOINT}/search/movie?api_key=${this.constants.API_KEY}&language=es&query=${textoBuscar}&page=1&callback=JSONP_CALLBACK`
      return this.http.jsonp(url, "");
    }

    // Info Movie
    getInfoPelicula(id : string) : Observable<Object>{

      let url=`${this.constants.API_ENDPOINT}/movie/${id}?api_key=${this.constants.API_KEY}&language=es&callback=JSONP_CALLBACK`
      return this.http.jsonp(url, "")

    }




}