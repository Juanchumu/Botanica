import { NgModule } from "@angular/core";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatRadioModule } from "@angular/material/radio";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
	imports: [
		MatGridListModule,
		MatListModule,
		MatCardModule,
		MatButtonModule,
		MatToolbarModule,
		MatIconModule,
		MatRadioModule,
		MatSnackBarModule
		
	],
	exports: [
		MatGridListModule,
		MatListModule,
		MatCardModule,
		MatButtonModule,
		MatToolbarModule,
		MatIconModule,
		MatRadioModule,
		MatSnackBarModule
	],

})
export class MaterialModule{}
