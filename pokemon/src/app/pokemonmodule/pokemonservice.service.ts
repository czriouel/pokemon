 import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './Models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonserviceService {

  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonyId(pokemonId: number):Pokemon | undefined {
    return POKEMONS.find(pokemon => pokemon.id == pokemonId)
  }

  getPokemonTypeList(): string[]{
    return ['plante','feu','insecte','normal','electrik','poison'];
  }
}
