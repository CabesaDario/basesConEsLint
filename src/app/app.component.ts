import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //nombre que este componente va a tener
  templateUrl: 'app.component.html'
  /*template: `<span>
    <h1>Darío</h1>



  </span>`,*/
  //asi se hace con un template en la misma linea
})
export class AppComponent {
  //lo que nosotros tenemos por pantalla en el navegador es una instancia
  //del AppComponent(es nuestro DOM)
  public titulo: string = 'Contador App de Darío Ojeda Jurado';
  public subtitulo: string = 'Siguiendo el curso de Fernando Herrera';
  public numero: number = 0;
  public   base: number = 5;

  acumular( valor: number ){
    this.numero += valor;
  }

 
}
