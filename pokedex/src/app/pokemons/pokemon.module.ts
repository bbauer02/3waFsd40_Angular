import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsComponent } from './pokemons.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonTagColorPipe } from './pokemon-tag-color.pipe';
import { BorderCardDirective } from './border-card.directive';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonTeamComponent } from './pokemon-team/pokemon-team.component';
import {Routes, RouterModule } from "@angular/router";
import {FormsModule} from "@angular/forms";
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';

// Définition de la constante pour les routes
const pokemonsRoutes: Routes = [
  {
    path: 'pokemons',
    component: PokemonsComponent
  },
  {
    path:'pokemon/:id',
    component: PokemonDetailComponent
  }
];

@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonDetailComponent,
    PokemonTagColorPipe,
    BorderCardDirective,
    PokemonCardComponent,
    PokemonTeamComponent,
    PokemonSearchComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(pokemonsRoutes),
    FormsModule

  ]
})
export class PokemonModule { }
