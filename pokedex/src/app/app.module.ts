import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule } from "@angular/router";


import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonDetailComponent } from './pokemons/pokemon-detail/pokemon-detail.component';


// Définition de la constante pour les routes
const pokemonsRoutes: Routes = [
  {
    path:'',
    redirectTo:'/pokemons',
    pathMatch: 'full'
  },
  {
    path: 'pokemons',
    component: PokemonsComponent
  },
  {
    path:'pokemon/:id',
    component: PokemonDetailComponent
  },
  {
    path:'**',
    redirectTo:'/pokemons',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(pokemonsRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
