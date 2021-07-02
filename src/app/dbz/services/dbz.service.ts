import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder:  15000,
        },
        {
          nombre: 'Vegeta',
          poder: 7500,
        }
      ];

    get personajes(): Personaje[] {
        return [...this._personajes];
        //el operador spread rompe la referencia a ese array de personajes, pero manda uno indéntico
    }  
    
    constructor() {};

    agregarPersonaje( personaje: Personaje ) {
        this._personajes.push( personaje );
        //como tiene getters ese arreglo de personajes, el getter es notificado y se redibuja donde esté ese
        //arreglo de personajes
    }


}