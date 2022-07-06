import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemons';
import { Pokemon } from '../Models/pokemon';

@Component({
  selector: 'app-detailspokemon',
  templateUrl: 'detailspokemon.component.html',
 
})
export class DetailspokemonComponent implements OnInit {

  pokemonsList: Pokemon[] | undefined;
  pokemon : Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.pokemonsList = POKEMONS;
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemon  = this.pokemonsList.find(pokemon => pokemon.id == +pokemonId)
    }
   /*  else {
      this.pokemon = undefined;
    } */
    

  }
  goToPokeonList(){
    this.router.navigate(['/pokemons']);
  }

}
