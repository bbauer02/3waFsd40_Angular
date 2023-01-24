import { Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Pokemon} from "../pokemon";
import POKEMONS from "../mock-pokemon";
@Component({
  selector: 'pokemonDetail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  selectedPokemon:Pokemon |null = null;
  constructor(private route: ActivatedRoute) {

  }
  ngOnInit() : void {
    const id = this.route.snapshot.paramMap.get('id') || "";
    this.selectedPokemon =  POKEMONS.filter(pokemon => pokemon.id === +id )[0];
  }

  ngOnChanges() {

  }

}
