import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html' 

})

export class AppComponent {

  constructor(private router: Router){}
   //title = 'pokemon';
   
  /* //selectPokemon(pokemon: Pokemon) {
  selectPokemon(pokemonId:string) {

    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId );
    if(pokemon) {
      console.log('Vous avez Choisi un pokemon qui existe ' + pokemon.name);
      this.pokemonSelected = pokemon;
    }
    else {
      console.log('Vous avez Choisi un pokemon qui n existe pas ');
      this.pokemonSelected = pokemon;
    }
     */

   // const index: number = +(event?.target as HTMLInputElement).value;
  //const id = +pokemonId;
  //console.log('Vous avez cliquer sur le pokemon' + this.pokemonList[id].name);
  
  //const index = id - 1;
   
  //console.log(`Vous avez cliquer sur le pokemon + ${pokemon.name}`);


  goToPokeonList(){
    this.router.navigate(['/pokemons']);
  }
  }


