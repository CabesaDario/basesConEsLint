import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    //las declaraciones indican qué cosas tiene ese módulo
    declarations: [
        HeroeComponent,
        ListadoComponent,
    ],
    //los exports son qué cosas quiero hacer públicas
    //ó visibles dentro de este módulo
    exports: [
        ListadoComponent,
        //de esta forma, HeroeComponent es una caja negra que solo es visible desde este módulo
    ],
    imports: [
        CommonModule
    ]

})
export class HeroesModule {

}