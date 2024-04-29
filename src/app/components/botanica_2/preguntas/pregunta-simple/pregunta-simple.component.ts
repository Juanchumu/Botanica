import { Component } from '@angular/core';
import { Base_Especies_3 } from 'src/app/data/base_especies_3';
import { Base_Especies_2 } from 'src/app/data/base_especies_2';
import { Base_Familias } from 'src/app/data/base_familias';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-pregunta-simple',
  templateUrl: './pregunta-simple.component.html',
  styleUrls: ['./pregunta-simple.component.css']
})
export class PreguntaSimpleComponent {
	//TODO
	//MaterialSnackbar para las repuesta de preguntas
	//materialslide para primer parcial
	//


//	public Base_var: any = Base_Especies_3;

	//funcion para generar una pregunta simple:
	//
	//este formato de preguntas por lo menos posee una respuesta correcta
	//
	//segundo tipo de funcion simple: 
	public Mostrar_pregunta_simple: boolean = false;
	public Pregunta_Simple_Maqueta: any ={
		Pregunta: "Inserte Pregunta",
		Respuestas: [
			["1","Falsa"],
			["2","Falsa"],
			["3","Falsa"],
			["4","Falsa"],
		],
		Respuesta_V: ["Todavia no respondio nada","Color_de_clase"],
	};
	constructor(private _snackBar: MatSnackBar){
		this.Seleccion_Config(1);
		this.F_Generar_Pregunta_simple();
	}

	////Seleccionador de base a utilizar
	//
	public Base_Nueva: any = {"Lista_de_especies":[]};
	Seleccion_Config(value: number){
		this.Base_Nueva = {"Lista_de_especies": []};
		switch (value){
			case 1:
				for(let especie of Base_Especies_3.Lista_de_especies){
				this.Base_Nueva.Lista_de_especies.push(especie);
			}	
			for(let especie of Base_Especies_2.Lista_de_especies){
				this.Base_Nueva.Lista_de_especies.push(especie);
			}

				this.Seleccion_Config_2(this.V_Tipos);
			break;
			case 2:
				//do somenting
			break;
			case 3:
				for(let especie of Base_Especies_2.Lista_de_especies){
				this.Base_Nueva.Lista_de_especies.push(especie);
			}	
				this.Seleccion_Config_2(this.V_Tipos);

			break;
			case 4:
				for(let especie of Base_Especies_3.Lista_de_especies){
				this.Base_Nueva.Lista_de_especies.push(especie);
			}	
				this.Seleccion_Config_2(this.V_Tipos);
			break;

			default:
				//general
		}
			///
			console.log(this.Base_Nueva);
	}
	//Segunda config
	public V_Tipos: number = 1;
	public Base_var: any = Base_Especies_3;
	Seleccion_Config_2(value: number){
		this.Base_var = { "Lista_de_especies": []};
		this.V_Tipos = value; 
		switch(value){
			case 1:
			for(let especie of this.Base_Nueva.Lista_de_especies){
			this.Base_var.Lista_de_especies.push(especie);
			}
			this.contar_cantidad_de_especies_en_la_base();
			break;
			case 2:
			for(let especie of this.Base_Nueva.Lista_de_especies){
				if(especie.Comestible[0] == "Si" ){
			this.Base_var.Lista_de_especies.push(especie);
				}
			}
			this.contar_cantidad_de_especies_en_la_base();


				break;
		}
	}
	public VE: number = 0;
	contar_cantidad_de_especies_en_la_base(){
			this.VE = 0;
		for(let especie of this.Base_var.Lista_de_especies){
			this.VE++
	}
			console.log("Cantidad de especies");
			console.log(this.VE);
	}
	//Actualizar base
	

	public F_G_N: number = 0;
	F_Generar_Pregunta_simple(){
		this.F_G_N = Math.floor(Math.random()*5);
		console.log(this.F_G_N);
		switch(this.F_G_N){
			case 0:
				this.FPS_familia();
			break;
			case 1:
				this.FPS_Especie_Familia();
			break;
			case 3:
				this.FPS_Orden_Especie();
			break;
			case 4:
				this.FPS_Especie_Orden();
			break;
			default:
				this.FPS_familia();
			console.log("Hola 11"+ this.F_G_N);
		}
	}
	FPS_Verificar_Respuesta(item:boolean){
		if(item){
			this.Pregunta_Simple_Maqueta.Respuesta_V[0] = "Si";
			this.Pregunta_Simple_Maqueta.Respuesta_V[1] = this.F_Color_aleatorio();
			console.log("si");
			this._snackBar.open("Correcto!!", "Ok");
		}else{
			this.Pregunta_Simple_Maqueta.Respuesta_V[0] = "No";
			this.Pregunta_Simple_Maqueta.Respuesta_V[1] = this.F_Color_aleatorio();
			console.log("no");
			this._snackBar.open("Incorrecto!!", "Ok");
		}

	}
	//
	//Generar un color random
	public V_C1: number[] = [0,0,0];
	F_Color_aleatorio(){
		this.V_C1[0] = Math.floor(Math.random()*200+50);
		this.V_C1[1] = Math.floor(Math.random()*200+50);
		this.V_C1[2] = Math.floor(Math.random()*200+50);
		return `${this.V_C1[0]},${this.V_C1[1]},${this.V_C1[2]}`;
	}
	//
	//Bloque de pregunta por familia
	public FPS_familia_E: any = {};
	public FPS_familia_E_falsa: any = {};
	FPS_familia(){
		this.FPS_familia_E = this.Base_var.Lista_de_especies[Math.floor(Math.random()*this.VE)];
		this.Pregunta_Simple_Maqueta.Pregunta = `¿A que familia pertenece ${this.FPS_familia_E.Especie}?`;
		//en la primera ubicacion se encuentra la correcta

		//this.Pregunta_Simple_Maqueta.Respuesta_V[0] = this.FPS_familia_E.Familia;
		this.Pregunta_Simple_Maqueta.Respuestas[0][0] = this.FPS_familia_E.Familia;
		this.Pregunta_Simple_Maqueta.Respuestas[0][1] = true;
		//en las siguientes no
		//otra especie aleatoria:
		//1
		for(let index = 1; index < 4; index++){
			this.FPS_familia_E_falsa = this.Base_var.Lista_de_especies[Math.floor(Math.random()*this.VE)];
			this.Pregunta_Simple_Maqueta.Respuestas[index][0] = this.FPS_familia_E_falsa.Familia;
			if(this.FPS_familia_E_falsa.Familia == this.FPS_familia_E.Familia){
				this.Pregunta_Simple_Maqueta.Respuestas[index][1] = true;
			}else{
				this.Pregunta_Simple_Maqueta.Respuestas[index][1] = false;
			}
		}
		//
		this.Pregunta_Simple_Maqueta.Respuestas.sort(function(){return 0.5 - Math.random()});
	}

	//Pregunta simple: especie pertenece a familia: 
	public FPS_V_Especie_Correcta: any = {};
	public FPS_V_Especie_Falsa: any = {};
	FPS_Especie_Familia(){
		//asigno el boton para verificar esta respuesta: 
		this.FPS_V_Especie_Correcta = this.Base_var.Lista_de_especies[Math.floor(Math.random()*this.VE)];
		this.Pregunta_Simple_Maqueta.Pregunta = `
		¿Cual de estas especies pertenece a la familia ${this.FPS_V_Especie_Correcta.Familia}?`;
		//en la primera ubicacion se encuentra la correcta
		//
		this.Pregunta_Simple_Maqueta.Respuestas[0][0] = this.FPS_V_Especie_Correcta.Especie;
		this.Pregunta_Simple_Maqueta.Respuestas[0][1] = true;
		//en las siguientes no
		//otra especie aleatoria:
		//1
		//
		for(let index = 1; index < 4; index++){
			this.FPS_V_Especie_Falsa = this.Base_var.Lista_de_especies[Math.floor(Math.random()*this.VE)];
			//Respuesta y su valor de verdad 
			this.Pregunta_Simple_Maqueta.Respuestas[index][0] = this.FPS_V_Especie_Falsa.Especie;
			if(this.FPS_V_Especie_Correcta.Familia == this.FPS_V_Especie_Falsa.Familia){
				this.Pregunta_Simple_Maqueta.Respuestas[index][1] = true;
			}else{
				this.Pregunta_Simple_Maqueta.Respuestas[index][1] = false;
			}
		}
		this.Pregunta_Simple_Maqueta.Respuestas.sort(function(){return 0.5 - Math.random()});
	}
	//FPS_familia_R_falsa(){
	//para hacer
	//a que orden pertenece esta especie?
	public FPS_V_Orden_Especie_Correcta: any ={};
	public FPS_V_Orden_Especie_Falsa: any ={};
	FPS_Orden_Especie(){
		//asigno el boton para verificar esta respuesta: 
		this.FPS_V_Orden_Especie_Correcta = this.Base_var.Lista_de_especies[Math.floor(Math.random()*this.VE)];
		this.Pregunta_Simple_Maqueta.Pregunta = `
		¿A que orden pertenece la especie ${this.FPS_V_Orden_Especie_Correcta.Especie}?`;
		//en la primera ubicacion se encuentra la correcta
		//
		this.Pregunta_Simple_Maqueta.Respuestas[0][0] = this.FPS_V_Orden_Especie_Correcta.Orden;
		this.Pregunta_Simple_Maqueta.Respuestas[0][1] = true;
		//en las siguientes no
		//otra especie aleatoria:
		//1
		//
		for(let index = 1; index < 4; index++){
			this.FPS_V_Orden_Especie_Falsa = this.Base_var.Lista_de_especies[Math.floor(Math.random()*this.VE)];
			//Respuesta y su valor de verdad 
			this.Pregunta_Simple_Maqueta.Respuestas[index][0] = this.FPS_V_Orden_Especie_Falsa.Orden;
			if(this.FPS_V_Orden_Especie_Correcta.Orden == this.FPS_V_Orden_Especie_Falsa.Orden){
				this.Pregunta_Simple_Maqueta.Respuestas[index][1] = true;
			}else{
				this.Pregunta_Simple_Maqueta.Respuestas[index][1] = false;
			}
		}
		this.Pregunta_Simple_Maqueta.Respuestas.sort(function(){return 0.5 - Math.random()});
	}
	// cuales especies pertenecen al orden?
	public FPS_V_Especie_Orden_Correcta: any ={};
	public FPS_V_Especie_Orden_Falsa: any ={};
	FPS_Especie_Orden(){
		//asigno el boton para verificar esta respuesta: 
		this.FPS_V_Especie_Orden_Correcta = this.Base_var.Lista_de_especies[Math.floor(Math.random()*this.VE)];
		this.Pregunta_Simple_Maqueta.Pregunta = `
		¿Cuales de las siguientes especies corresponden al Orden ${this.FPS_V_Especie_Orden_Correcta.Orden}?`;
		//en la primera ubicacion se encuentra la correcta
		//
		this.Pregunta_Simple_Maqueta.Respuestas[0][0] = this.FPS_V_Especie_Orden_Correcta.Especie;
		this.Pregunta_Simple_Maqueta.Respuestas[0][1] = true;
		//en las siguientes no
		//otra especie aleatoria:
		//1
		//
		for(let index = 1; index < 4; index++){
			this.FPS_V_Especie_Orden_Falsa = this.Base_var.Lista_de_especies[Math.floor(Math.random()*this.VE)];
			//Respuesta y su valor de verdad 
			this.Pregunta_Simple_Maqueta.Respuestas[index][0] = this.FPS_V_Especie_Orden_Falsa.Especie;
			if(this.FPS_V_Especie_Orden_Correcta.Orden == this.FPS_V_Especie_Orden_Falsa.Orden){
				this.Pregunta_Simple_Maqueta.Respuestas[index][1] = true;
			}else{
				this.Pregunta_Simple_Maqueta.Respuestas[index][1] = false;
			}
		}
		this.Pregunta_Simple_Maqueta.Respuestas.sort(function(){return 0.5 - Math.random()});
	}

	//
	//a que familia pertenece este orden?
	//que especie posee estas caracteristicas?
	//
	//
	//Funcion Tabla completar:
	//
	//
	//Funcion Actualizar pregunta:
	//
	//Funcion llenar la base_Familias 

}
