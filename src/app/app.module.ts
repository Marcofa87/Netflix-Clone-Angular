import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RicercaComponent } from './ricerca/ricerca.component';
import { ContattiComponent } from './contatti/contatti.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AccediComponent } from './accedi/accedi.component';
import { RegistratiComponent } from './registrati/registrati.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FooterComponent } from './footer/footer.component';
import { FilmComponent } from './film/film.component';
import { TrailerComponent } from './trailer/trailer.component';
import { FormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { IconesocialComponent } from './iconesocial/iconesocial.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RicercaComponent,
    ContattiComponent,
    NavbarComponent,
    AccediComponent,
    RegistratiComponent,
    NotfoundComponent,
    FooterComponent,
    FilmComponent,
    TrailerComponent,
    IconesocialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LazyLoadImageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
