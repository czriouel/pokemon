import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
//import { POKEMONS } from '../mock-pokemons';
import { Pokemon } from '../Models/pokemon';
import { PokemonserviceService } from '../pokemonservice.service';

@Component({
  selector: 'app-detailspokemon',
  templateUrl: 'detailspokemon.component.html',
 
})
export class DetailspokemonComponent implements OnInit {

  pokemonsList: Pokemon[] | undefined;
  pokemon : Pokemon | undefined;

  constructor(
    private route: ActivatedRoute, 
    private router:Router,
    private _pokemonservice:PokemonserviceService) { }

  ngOnInit(): void {
    //this.pokemonsList = POKEMONS;
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      //this.pokemon  = this.pokemonsList.find(pokemon => pokemon.id == +pokemonId)
      this.pokemon = this._pokemonservice.getPokemonyId(+pokemonId);
    }
   /*  else {
      this.pokemon = undefined;
    } */
    

  }
  goToPokeonList(){
    this.router.navigate(['/pokemons']);
  }

}
