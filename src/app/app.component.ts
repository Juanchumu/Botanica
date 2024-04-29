import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
	public lugar: boolean = false;
	public lugar2: boolean = true;
	cambio(cambiazo:number){

		if(cambiazo == 1){
		this.lugar = true;
		this.lugar2 = false;
		}

		if(cambiazo == 2){
		this.lugar = false;
		this.lugar2 = true;
		}
	}

} 
