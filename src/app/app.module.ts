import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 

import { Constants } from './config/constants';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from "./components/card/card.component";
import { SearcherComponent } from './components/searcher/searcher.component'; 
import { InfoMovieComponent } from './components/info-movie/info-movie.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { MovieApiService } from './data/services/movie-api.service';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { InfoMoviePageComponent } from './pages/info-movie-page/info-movie-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SearcherComponent,
    InfoMovieComponent,
    HomeComponent,
    NotFoundComponent,
    HomePageComponent,
    SearchPageComponent,
    NotFoundPageComponent,
    InfoMoviePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [MovieApiService, Constants, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
