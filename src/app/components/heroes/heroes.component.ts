import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroes } from "../../services/heroes.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heroes:Heroes[] = [];

  constructor( private _heroesService:HeroesService, private router:Router) { }
  

  ngOnInit() {
    this.heroes =  this._heroesService.getHeroes();
    console.log(this.heroes);
  }


  verHeroe(id:number){
    this.router.navigate(['/heroe',id]);
  }


}
