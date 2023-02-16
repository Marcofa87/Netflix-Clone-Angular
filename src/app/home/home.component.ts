import { Component, Input, OnInit } from '@angular/core';
import { ApiFilmService } from '../Services/api-film.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  

  constructor(private apibestfilmService: ApiFilmService) {}

  ngOnInit(): void {
    this.getAPIBestFilms();
  }
  api: any = {};
  title: string = 'LabTv'

  

  getAPIBestFilms() {
    this.apibestfilmService.getAPIBestFilms().subscribe((data: any) => {
      console.log(data);
      this.api = data;
    });
  }
    
    }

