import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListepokemonsComponent } from './listepokemons/listepokemons.component';
import { DetailspokemonComponent } from './detailspokemon/detailspokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokTypeColorPipe } from './pok-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokemonserviceService } from './pokemonservice.service';


const pokemonRoutes: Routes = [
  {
    path:'pokemons', component: ListepokemonsComponent
  },

  {
    path:'pokemons/:id', component: DetailspokemonComponent
  }
 
];

@NgModule({
  declarations: [
    ListepokemonsComponent,
    DetailspokemonComponent,
    BorderCardDirective,
    PokTypeColorPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers:[PokemonserviceService]
})
export class PokemonmoduleModule { }
