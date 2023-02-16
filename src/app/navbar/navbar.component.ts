import { Component, OnInit, Input } from '@angular/core';
import { ApiFilmService } from '../Services/api-film.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

    @Input()
  imageSrc!: string;
  
}

