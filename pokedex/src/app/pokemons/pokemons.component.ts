import { Component, OnInit } from '@angular/core';
import {Pokemon} from "./pokemon";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit{
  title: string = "Liste des Pokémons";
  pokemons: Pokemon[]=[];
  selectedPokemon: Pokemon | null = null;

  teams: Pokemon[] = [];

    constructor(private pokemonService : PokemonService) {
    }
  ngOnInit() {
      this.pokemons = this.pokemonService.getPokemons();
  }

  onSelect(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }

  AddToTeamParent($event: number) {
      const addedPokemon : Pokemon | undefined = this.pokemons.find(pokemon => pokemon.id === $event);
      if(addedPokemon && this.teams.length <=5) {
        this.teams.push(addedPokemon);
      }
  }


}
