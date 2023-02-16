import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccediComponent } from './accedi/accedi.component';
import { ContattiComponent } from './contatti/contatti.component';
import { FilmComponent } from './film/film.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegistratiComponent } from './registrati/registrati.component';
import { RicercaComponent } from './ricerca/ricerca.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'search', component: RicercaComponent},
  {path: 'film/:id', component: FilmComponent},
  {path: 'access', component: AccediComponent},
  {path: 'contacts', component: ContattiComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistratiComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
