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

  onSelect(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }


}
