import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PokemonModule} from "./pokemons/pokemon.module";

import { AppComponent } from './app.component';
import {Routes, RouterModule } from "@angular/router";
import {PokemonsComponent} from "./pokemons/pokemons.component";
import {PokemonDetailComponent} from "./pokemons/pokemon-detail/pokemon-detail.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/pokemons',
    pathMatch: 'full'
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    PokemonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
