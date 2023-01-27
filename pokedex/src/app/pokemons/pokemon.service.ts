import { Injectable } from '@angular/core';
import POKEMONS from "./mock-pokemon";
import {Pokemon} from "./pokemon";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, tap, of} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) {
  }
  private pokemons: Pokemon[] = POKEMONS;


  getPokemons() : Observable<Pokemon[]> {

    return this.http.get<Pokemon[]>('http://localhost:3000/pokemons').pipe(
      tap(
        pokemonList => console.table(pokemonList)),
      catchError(error => {
        console.error(error);
        return of([]);
      })
    );

  }

  updatePokemon(pokemon:Pokemon) : Observable<Pokemon|undefined> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.put<Pokemon>('http://localhost:3000/pokemons', pokemon, httpOptions).pipe(
      tap(
        response => console.table(response)),
      catchError(error => {
        console.error(error);
        return of(undefined);
      })
    );
  }
  addPokemon(pokemon:Pokemon) {

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };


    return this.http.post('http://localhost:3000/pokemons', JSON.stringify(pokemon), httpOptions).pipe(
      tap(
        pokemon => console.table(pokemon)),
      catchError(error => {
        console.error(error);
        return of({});
      })
    );


  }
  getPokemon(id: number) : Pokemon | undefined {
      return this.pokemons.find(pokemon => pokemon.id === id);
  }


}
