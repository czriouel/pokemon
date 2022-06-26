import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './Models/pokemon';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html' 

})

export class AppComponent implements OnInit {
   //title = 'pokemon';
   pokemonList: Pokemon[] = POKEMONS;

ngOnInit() {
  console.table(this.pokemonList);
 
}

//selectPokemon(pokemon: Pokemon) {
  selectPokemon(event: MouseEvent) {
    const index: number = +(event?.target as HTMLInputElement).value;
  console.log('Vous avez cliquer sur le pokemon' + this.pokemonList[index].name);
  //console.log(`Vous avez cliquer sur le pokemon + ${pokemon.name}`);

}
}
