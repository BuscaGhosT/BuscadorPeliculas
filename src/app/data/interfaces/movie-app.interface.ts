
export interface ResponseMovies {
    page: number,
    results: [],
    total_pages: number,
    total_results: number
}

export interface ResponseInfoMovie {
  name : string,
  overview : string,
  release_date : string,
  original_language: string,
  original_title : string,
  vote_average : number,
  poster_path : string
  budget : number,
  revenue : number
}

export interface ResponseAbreviateInfoMovie {

  title : string,
  id : string,
  poster_path : string,
  
}