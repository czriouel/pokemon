import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
//import { POKEMONS } from '../mock-pokemons';
import { Pokemon } from '../Models/pokemon';
import { PokemonserviceService } from '../pokemonservice.service';

@Component({
  selector: 'app-listepokemons',
  templateUrl: 'listepokemons.component.html'
 
})
export class ListepokemonsComponent implements OnInit  {
  //pokemonList: Pokemon[] = POKEMONS;
  pokemonList: Pokemon[]=[];
  constructor
    (
    private router: Router,
    private _pokemonservice:PokemonserviceService

    ){}

  ngOnInit(){
    this.pokemonList = this._pokemonservice.getPokemonList();
  }

  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemons',pokemon.id]);
  }

}

