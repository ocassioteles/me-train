import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { ExerciseFormComponent } from './exercise-form/exercise-form.component';
import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';
import { SeriesDetailComponent } from './series-detail/series-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseListComponent,
    ExerciseFormComponent,
    ExerciseDetailComponent,
    SeriesDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
