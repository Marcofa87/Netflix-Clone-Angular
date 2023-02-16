import { Component, OnInit } from '@angular/core';
import { ApiFilmService } from '../Services/api-film.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
})
export class FilmComponent implements OnInit {

  sanitizer:any 

  constructor(
    private titleService: ApiFilmService,
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) {}

  idUrl: string = '';
  videoUrl: any;

  filmTitle: any;
  filmTrailer:any;

  ngOnInit(): void {
    this.filmTitle = this.route.snapshot.params['id'];
    this.filmTrailer = this.route.snapshot.params['id'];
    this.getAPITrailer(this.filmTrailer)
    this.getAPITitle(this.filmTitle);
  }

  transform(url:any) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  arrFilm: any = {};
  arrTrailer:any

  getAPITitle(filmTitle: string) {
    this.titleService.getAPITitle(filmTitle).subscribe((data) => {
      this.arrFilm = data;
    });

    
  }
  getAPITrailer(filmTrailer: string) {
    this.titleService.getAPITrailer(filmTrailer).subscribe((data) => {
      this.arrTrailer = data;
      this.idUrl = 'https://www.youtube.com/embed/'+ this.arrTrailer.videoId
    })
  }
}

