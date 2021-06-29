import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorDarioComponent } from './contador/contador-dario.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';


@NgModule({
  declarations: [
    AppComponent,
    ContadorDarioComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
