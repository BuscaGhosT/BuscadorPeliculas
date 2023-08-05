import { Component, OnInit,Input } from '@angular/core';
import { MovieApiService } from 'src/app/data/services/movie-api.service';
import { ResponseMovies } from 'src/app/data/interfaces/movie-app.interface';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router'

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  textoBuscar : string = ""
  moviesFilter : any[] = []
  errorMessage : string = ""
  @Input() fromHome : boolean = false


  constructor ( private mvS : MovieApiService, private route : ActivatedRoute, private router : Router){

    // Acepta los casos de buscador por ruta (/search/name)
    this.route.params.subscribe(param=>{

      param["filter"] !== undefined ? this.textoBuscar = param["filter"] : "";
      param["filter"] !== undefined ? this.search() : "";

    })
  }

  ngOnInit() {}


  // Busqueda desde el formulario
  submit($event : Event){
    
    $event.preventDefault()

    this.router.navigate(['search',this.textoBuscar])
      
  }

  // Búsqueda por ruta
  search(){
      
    console.log("Searching...")
    this.mvS.getPeliculasFiltradas(this.textoBuscar).subscribe({

      next: (resp)=>{

        const {results} = resp as ResponseMovies

        this.moviesFilter=results;

      },
      error : (error) => {                           

        this.errorMessage = "Se produjo un error al obtener las películas";
       
      }
    })

  }
}
