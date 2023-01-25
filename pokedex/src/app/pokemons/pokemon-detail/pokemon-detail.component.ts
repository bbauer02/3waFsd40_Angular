import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {Router, ActivatedRoute} from "@angular/router";
import {Pokemon} from "../pokemon";
import POKEMONS from "../mock-pokemon";
import { outputAst } from '@angular/compiler';
@Component({
  selector: 'pokemonDetail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  selectedPokemon:Pokemon |null = null;

 

  constructor( private route: ActivatedRoute, private router: Router, private location:Location ) {

  }
  
  ngOnInit() : void {
    const id = this.route.snapshot.paramMap.get('id') || "";
    this.selectedPokemon =  POKEMONS.filter(pokemon => pokemon.id === +id )[0];
  }

  ngOnChanges() {

  }

  back() : void {
    //this.router.navigate(['/pokemons']);
    this.location.back(); 
  }



}



