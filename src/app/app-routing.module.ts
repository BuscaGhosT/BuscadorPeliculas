import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";;
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { InfoMoviePageComponent } from './pages/info-movie-page/info-movie-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes = [

  { path: "", component: HomePageComponent},
  { path: "home", component: HomePageComponent},
  { path: "search", component: SearchPageComponent},  
  { path: "search/:filter", component: SearchPageComponent},
  { path: "pelicula/:id", component: InfoMoviePageComponent},
  { path: '**', component: NotFoundPageComponent }
  //{ path: '**', redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
