import { NgModule } from "@angular/core";
import { ContadorDarioComponent } from './contador/contador-dario.component';

@NgModule({
    declarations: [
        ContadorDarioComponent,
    ],
    exports: [
        ContadorDarioComponent
    ]
})
export class ContadorModule{

}