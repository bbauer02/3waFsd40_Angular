import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'pokemonCard',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Output() AddToTeam: EventEmitter<number> = new EventEmitter(); 
  @Input() pokemon: Pokemon | null = null;

  selectPokemonForTeam(id: number) {
    this.AddToTeam.emit(id);
  }
}
