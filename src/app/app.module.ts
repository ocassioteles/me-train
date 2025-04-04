import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExercicioListaComponent } from './components/exercicio-lista/exercicio-lista.component';
import { ExercicioFormComponent } from './components/exercicio-form/exercicio-form.component';
import { ExercicioDetalheComponent } from './components/exercicio-detalhe/exercicio-detalhe.component';
import { SerieFormComponent } from './components/serie-form/serie-form.component';
import { ProgressoChartComponent } from './components/progresso-chart/progresso-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ExercicioListaComponent,
    ExercicioFormComponent,
    ExercicioDetalheComponent,
    SerieFormComponent,
    ProgressoChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
