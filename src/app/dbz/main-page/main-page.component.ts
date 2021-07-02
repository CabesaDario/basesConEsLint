import { Component} from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent{


  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }

  agregarNuevoPersonaje( personaje: Personaje) {
    this.personajes.push(personaje);
  }

  constructor( private dbzService: DbzService) {

  }

  

}
