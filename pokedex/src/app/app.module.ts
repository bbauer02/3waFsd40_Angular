import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PokemonModule} from "./pokemons/pokemon.module";

import { AppComponent } from './app.component';
import {Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HttpClientModule} from "@angular/common/http";




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
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    PokemonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
