import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemons';
import { Pokemon } from '../Models/pokemon';

@Component({
  selector: 'app-listepokemons',
  templateUrl: 'listepokemons.component.html'
 
})
export class ListepokemonsComponent  {
  pokemonList: Pokemon[] = POKEMONS;
  constructor(private router: Router){}

  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemons',pokemon.id]);
  }

}

