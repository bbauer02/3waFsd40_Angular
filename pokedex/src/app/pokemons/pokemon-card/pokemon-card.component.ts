import { Component, Input} from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'pokemonCard',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input() pokemon: Pokemon | null = null;
}
