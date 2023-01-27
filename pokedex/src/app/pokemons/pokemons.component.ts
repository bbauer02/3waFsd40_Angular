import { Component, OnInit } from '@angular/core';
import {Pokemon} from "./pokemon";
import {PokemonService} from "./pokemon.service";
import {environment} from "../../environments/environment";


@Component({
  selector: 'pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit{

  title: string = `Liste des Pokémon - ${environment.production? "PROD MOD": "DEV MOD"}`;
  pokemons: Pokemon[]=[];
  selectedPokemon: Pokemon | null = null;

  teams: Pokemon[] = [];

    constructor(private pokemonService : PokemonService) {
    }
  ngOnInit() {
        this.pokemonService.getPokemons().subscribe(pokemonlist => this.pokemons = pokemonlist);
    // this.pokemonService.getPokemons().subscribe(pokemonList => this.pokemons = pokemonList);
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

  onSearchPokemon($event: string) {
    //this.pokemons = this.pokemonService.getPokemons($event);
  }

  TestAPI() {
      const pokemon : Pokemon= {
        name: "PikaTruc",
       hp: 25,
       cp: 5,
       picture: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
       types: ["Feu", "Poison"],
       created: new Date()
     }


    this.pokemonService.addPokemon(pokemon).subscribe(response => {
      console.log(response);
      this.pokemons.push(<Pokemon>response);
    });

  }

}
