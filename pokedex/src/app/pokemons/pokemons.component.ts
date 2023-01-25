import { Component } from '@angular/core';
import POKEMONS from "./mock-pokemon";
import {Pokemon} from "./pokemon";

@Component({
  selector: 'pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent {
  title: string = "Liste des Pokémons";
  pokemons: Pokemon[]  = POKEMONS;
  selectedPokemon: Pokemon | null = null;

  teams: Pokemon[] = [];

  onSelect(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }

  AddToTeamParent($event: number) {
      const addedPokemon : Pokemon | undefined = POKEMONS.find(pokemon => pokemon.id === $event);
      if(addedPokemon && this.teams.length <=5) {
        this.teams.push(addedPokemon);
      }    
  }


}
