import { Component } from "@angular/core";

@Component({
    selector: 'app-dario-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'Ironman';
    edad: number = 45;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre(): void {
        //Angular se encarga de cambiar por nosotros
        //en todos los lugares del DOM donde se consumia ese nombre
        //sean funciones o propiedades o getters.
        this.nombre = 'Spiderman';
    }
    //inclusive si vuelvo a pulsar(por 2a vez)b el botón no se vuelve 
    //a redibujar el cambio, porque Angular es lo suficientemente inteligente, 
    //para saber que, si no se produce ningún cambio, no hay que redibujar los elementos del DOM
    //(el código de cambiarEdad() sí que se ejecuta eh)
    cambiarEdad(): void{
        this.edad = 30;
    }
    //esto es parte del One Way Data Binding
    
}
