import { Component } from '@angular/core';
import { Base_Especies_3 } from 'src/app/data/base_especies_3';
import { Base_Especies_2 } from 'src/app/data/base_especies_2';

@Component({
  selector: 'app-verduleria-de-juan',
  templateUrl: './verduleria-de-juan.component.html',
  styleUrls: ['./verduleria-de-juan.component.css']
})
export class VerduleriaDeJuanComponent {

	public Base_2: any = Base_Especies_2;
	public Base_3: any = Base_Especies_3;
	public Base_Verduleria: any = [];
	constructor(){
	//funcion que mete todas las alimenticias en un array 
	for(let especie of this.Base_2.Lista_de_especies){
		if(especie.Comestible[0] === "Si" ){
			this.Base_Verduleria.push(especie);
		}
	}
	console.log(this.Base_Verduleria);
	}
}
