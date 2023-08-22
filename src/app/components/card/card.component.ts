import { Component, OnInit,Input } from '@angular/core';
import { ResponseAbreviateInfoMovie } from 'src/app/data/interfaces/movie-app.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  // Property from parent Component
  @Input() movies : ResponseAbreviateInfoMovie[] = []

  ngOnInit() : void {}

}
