import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { map } from 'rxjs/internal/operators/map';


@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent implements OnInit {



	time!: {
		days: number;
		hours: number;
		minutes: number;
		seconds: number;
	};
	///@Input() finishDateString: string ='';
	public finishDateString: string ='2024-06-01 18:18:18';
	finishDate: Date = new Date();


	ngOnInit():void{
		//Inicializamos el momento que falta hasta llegar al tiempo objetivo con valores en
		this.time = { days : 0, hours: 0, minutes:0,seconds:0};
		//Creamos la fecha a partir de la fecha en formato string AAAA-MM-dd HH:mm:ss
		this.finishDate = new Date(this.finishDateString);

		//this.start().subscribe(_ => console.log("tik"));
		this.start().subscribe(
			(data)=>{
			console.log(data);
			}, error => {console.log("error");
			});
	}

	updateTime(){
		const now = new Date();
		const diff = this.finishDate.getTime() - now.getTime();
		console.log(diff);

		//calculos para sacar lo que resta hasta ese tiempo objetivo/final:
		const days  = Math.floor(diff/(1000*60*60*24));
		const hours = Math.floor(diff/(1000*60*60));
		const mins  = Math.floor(diff/(1000*60));
		const secs  = Math.floor(diff/(1000));
		// La diferencia que se asignara para mostrarlo en la pantalla:
		this.time.days = days;
		this.time.hours = hours - days *24;
		this.time.minutes = mins - hours * 60;
		this.time.seconds = secs - mins * 60;

	}
	//ejecutamos la accion cada segundo, para obtener la diferencia entre el momento actual
	start(){
		return interval(1000).pipe(
			map((x:number)=>{
				this.updateTime();
				return x;
			})
		);
	}



}

