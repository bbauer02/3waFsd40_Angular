import { Injectable } from '@angular/core';
import POKEMONS from "./pokemons/mock-pokemon";
import {Pokemon} from "./pokemons/pokemon";
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemons: Pokemon[] = POKEMONS;
  constructor() { }
  getPokemons() : Pokemon[] {
      return this.pokemons;
  }
  getPokemon(id: number) : Pokemon | undefined {
      return this.pokemons.find(pokemon => pokemon.id === id);
  }


}
