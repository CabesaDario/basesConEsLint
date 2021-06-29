import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán America'];
  heroesBorrados: string[] = [];

  borrarHeroe(): void{
    const tamanio:number = this.heroes.length;

    if(tamanio > 0){
      const random: number = Math.round(Math.random()*(tamanio-1));

      const arrayCortado = this.heroes.splice(random, 1);
      this.heroesBorrados.push(arrayCortado[0]);
    }
  }
}
