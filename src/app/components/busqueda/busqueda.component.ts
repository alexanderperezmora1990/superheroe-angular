import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroes } from '../../services/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  
  heroes:Heroes[] = [];
  
  constructor(private _activeRoute:ActivatedRoute, private heroesService: HeroesService, private router:Router) {
   
  }

  ngOnInit() {
    this._activeRoute.params.subscribe(param =>{
      if( this.heroesService.searchHeroe(param.parametro).length > 0){
        this.heroes = this.heroesService.searchHeroe(param.parametro); 
      }else{
        this.heroes = this.heroesService.getHeroes(); 
      }
      
    });
  }

  verHeroe(id:number){
    this.router.navigate(['/heroe',id]);
  }

}
