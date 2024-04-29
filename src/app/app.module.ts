import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MaterialModule } from 'src/app/data/app_modules/material_modules';

import { SegundoParcialComponent } from './components/botanica_2/segundo-parcial/segundo-parcial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VerduleriaDeJuanComponent } from './components/botanica_2/preguntas/verduleria-de-juan/verduleria-de-juan.component';
import { FloreriaDeTinchoComponent } from './components/botanica_2/preguntas/floreria-de-tincho/floreria-de-tincho.component';
import { PreguntaSimpleComponent } from './components/botanica_2/preguntas/pregunta-simple/pregunta-simple.component';
import { B2homeComponent } from './components/botanica_2/paginas/b2home/b2home.component';

@NgModule({
  declarations: [
    AppComponent,
    SegundoParcialComponent,
    VerduleriaDeJuanComponent,
    FloreriaDeTinchoComponent,
    PreguntaSimpleComponent,
    B2homeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
