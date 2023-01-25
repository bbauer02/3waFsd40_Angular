import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule } from "@angular/router";


import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonDetailComponent } from './pokemons/pokemon-detail/pokemon-detail.component';
import { PokemonTagColorPipe } from './pokemon-tag-color.pipe';
import { BorderCardDirective } from './border-card.directive';


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
    PokemonDetailComponent,
    PokemonTagColorPipe,
    BorderCardDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(pokemonsRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
