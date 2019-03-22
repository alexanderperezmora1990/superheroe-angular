import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Heroes,HeroesService} from '../../services/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: Heroes;
  @Input() indice: number;
  @Output() heroeSeleccionado = new EventEmitter<number>();
  
  constructor( private router:Router) { 
    
  }

  ngOnInit() {
  }

  verHeroe(id:number){
   this.heroeSeleccionado.emit(this.indice);
  }

}
