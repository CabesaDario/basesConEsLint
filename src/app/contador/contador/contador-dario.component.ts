import { Component} from '@angular/core';

@Component({
    selector: 'app-contador-dario',
    template: `
    
        <!-- esas dobles llaves me permiten introducir expresiones de javascript dentro, así como llamar a variables del DOM -->
        <h1> {{ titulo }}</h1>
        <h3> {{ subtitulo }}</h3>
        <h3>La base es: <strong>{{ base }}</strong></h3>

        <!-- no se aconseja poner mucha lógica en el lado del template -->
        <button (click) = "acumular(-base)"> - {{ base }}</button>


        <h2>{{ numero }}</h2>


        <button (click) = "acumular(+base)"> + {{ base }}</button>
    
    `
})
export class ContadorDarioComponent {
    public titulo: string = 'Contador App de Darío Ojeda Jurado';
    public subtitulo: string = 'Siguiendo el curso de Fernando Herrera';
    public numero: number = 0;
    public   base: number = 5;

    acumular( valor: number ){
        this.numero += valor;
    }
}