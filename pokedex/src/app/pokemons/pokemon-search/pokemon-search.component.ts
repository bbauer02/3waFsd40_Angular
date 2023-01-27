import { Component, Output, EventEmitter } from '@angular/core';
import {NgForm, NgModel} from "@angular/forms";
import {Pokemon} from "../pokemon";
import {resolve} from "@angular/compiler-cli";

@Component({
  selector: 'pokemonSearch',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss']
})
export class PokemonSearchComponent {
  @Output() searchPokemon: EventEmitter<string> = new EventEmitter();
  search:string = ""; // initialisation du champ de recherche pour le NgModel
  sentSearch : string = "";
  onSubmitSearch(form :NgForm) {
    this.sentSearch = form.value["search"];
    this.searchPokemon.emit(form.value["search"]);
  }






}
