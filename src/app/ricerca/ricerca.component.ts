import { Component, Input, OnInit } from '@angular/core';
import { ApiFilmService } from '../Services/api-film.service';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
})
export class RicercaComponent implements OnInit {
  constructor(
    private apisearch: ApiFilmService,
    private searchservice: ApiFilmService
  ) {}

  ngOnInit(): void {}

  filterSearch: string = '';

  titleSearch: any = {};

  isNotvisible: boolean = false;

  onSubmit() {
    this.getAPISearch(this.filterSearch);
    this.isNotvisible = !this.isNotvisible;
  }

  getAPISearch(searchBar: any) {
    this.searchservice.getAPISearch(searchBar).subscribe((data: any) => {
      this.titleSearch = data;
      console.log(data);
    });
  }
}
