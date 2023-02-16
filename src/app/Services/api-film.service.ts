import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiFilmService {
  constructor(private http: HttpClient) {}

 //wsAPIBestFilms: string ='https://imdb-api.com/en/API/MostPopularMovies/k_qf8pq1yv';
  //wsAPIBestFilms:string = 'https://imdb-api.com/en/API/MostPopularMovies/k_goc529s4'
  wsAPIBestFilms:string = 'https://imdb-api.com/en/API/MostPopularMovies/k_l116l2tx'
 // wsAPITitle: string = 'https://imdb-api.com/it/API/Title/k_vvt78sm2/';
  //wsAPITitle:string = 'https://imdb-api.com/en/API/Title/k_goc529s4/'
   wsAPITitle:string ='https://imdb-api.com/en/API/Title/k_l116l2tx/'
  //wsAPITrailer: string ='https://imdb-api.com/en/API/YouTubeTrailer/k_vvt78sm2/';
  //wsAPITrailer:string = 'https://imdb-api.com/en/API/YouTubeTrailer/k_goc529s4/'
  wsAPITrailer:string = 'https://imdb-api.com/en/API/YouTubeTrailer/k_l116l2tx/'
 // wsAPISearch: string = 'https://imdb-api.com/en/API/SearchTitle/k_qf8pq1yv/';
  //wsAPISearch:string = 'https://imdb-api.com/en/API/SearchTitle/k_goc529s4/'
  wsAPISearch:string = 'https://imdb-api.com/en/API/SearchTitle/k_l116l2tx/'



  getAPIBestFilms(): Observable<any> {
    return this.http.get(this.wsAPIBestFilms);
  }

  getAPITitle(request: string): Observable<any>{
    return this.http.get(this.wsAPITitle + request);
  }

  getAPITrailer(request: string): Observable<any> {
    return this.http.get(this.wsAPITrailer + request);
  }

  getAPISearch(request: string): Observable<any> {
    return this.http.get(this.wsAPISearch + request);
  }
}
