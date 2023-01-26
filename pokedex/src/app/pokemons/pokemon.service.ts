import { Injectable } from '@angular/core';
import POKEMONS from "./mock-pokemon";
import {Pokemon} from "./pokemon";
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
