import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from 'src/app/data/services/movie-api.service';
import { ResponseInfoMovie } from 'src/app/data/interfaces/movie-app.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-info-movie',
  templateUrl: './info-movie.component.html',
  styleUrls: ['./info-movie.component.css']
})
export class InfoMovieComponent implements OnInit {

  id : string = ""
  errorMessage : string = ""
  movie!: ResponseInfoMovie;
  available : boolean = false

  constructor ( private mvS : MovieApiService, private route:ActivatedRoute , private location: Location){

    // Acepta los casos de buscador por ruta (/search/name)
    this.route.params.subscribe(param=>{

      this.id = param["id"]
      this.searchMovie()
      
    })
  }

  ngOnInit() {}


   searchMovie(){

    this.mvS.getInfoPelicula(this.id).subscribe({
      
      next: (resp)=>{
      
      const {name , overview, release_date, original_title, original_language, vote_average ,poster_path, budget ,revenue} = resp as ResponseInfoMovie

        this.movie = {
          
          name : name,
          overview: overview,
          release_date : release_date,
          original_language: original_language,
          original_title : original_title,
          vote_average : vote_average,
          poster_path : poster_path,
          budget : budget,
          revenue : revenue

        }

        this.available = true
      },
      
        error : (error) => {                           

          this.errorMessage = "No se pudo obtener la información de dicha película";
      
      }
      
    });

  }

  regresar (){
    this.location.back(); 
  }

}
