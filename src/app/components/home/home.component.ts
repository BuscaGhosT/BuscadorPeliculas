import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/data/services/movie-api.service';
import { DatePipe } from '@angular/common';
import { ResponseMovies, ResponseAbreviateInfoMovie } from 'src/app/data/interfaces/movie-app.interface';
  
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

  recents : ResponseAbreviateInfoMovie[] = []
  actual_date : string = ""
  previus_date : string = ""
  number_subtracted_days : number = 3
  errorMessage : string = ""
  loading : boolean = false;
  fromHome : boolean = true

  constructor(private mvS: MovieApiService, private datePipe: DatePipe){

    this.getPreviousDate(this.number_subtracted_days)
    this.lastMovies()
    let fechaActual = this.datePipe.transform(new Date(), 'yyyy-MM-dd') as string;
    this.actual_date = fechaActual
    
  }

  ngOnInit() : void {}

  lastMovies() : void {
    this.loading = true
     this.mvS.getEstrenos(this.previus_date,this.actual_date).subscribe({

      next: (resp)=>{
       const {results} = resp as ResponseMovies
       this.recents=results;
       this.loading = false;
      },
      error : (error) => {                           

        this.errorMessage = "Se produjo un error al obtener las películas";
        this.loading = false
      }

     })
 
   }

   /**
    * 
    * @param day Number of days to subtract
    */
   getPreviousDate(day : number) : void{

    let today = new Date().getTime()
    let seconds = day * 24 * 3600 * 1000
    let res = today - seconds
    let resultDate = new Date(res)
    this.previus_date = this.datePipe.transform(resultDate, 'yyyy-MM-dd') as string;

   }




}
