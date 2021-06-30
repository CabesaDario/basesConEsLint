import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorDarioComponent } from './contador/contador-dario.component';

import { HeroesModule } from './heroes/heroes.module';




@NgModule({
  declarations: [
    AppComponent,
    ContadorDarioComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
