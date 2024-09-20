import { Component } from '@angular/core';
import { ResponsePokemon } from '../../models/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  pokemons: ResponsePokemon[];

  constructor(private pokemonService: PokemonService) {
    this.pokemons = [];
  }

  ngOnInit(): void {
    this.obtenerListaPokemons();
  }

  obtenerListaPokemons() {
    this.pokemonService.getAll().subscribe((response: ResponsePokemon[]) => {
      this.pokemons = response;
    });
  }
}
