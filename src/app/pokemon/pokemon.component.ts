import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  name: string ='';
  urlimage: string ='';
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    
  }
  search(){
    this.pokemonService.getPokemons(this.name).subscribe((data:any) => {console.log(data)
    this.urlimage= data.sprites.front_default;
    });
    
  }

}
