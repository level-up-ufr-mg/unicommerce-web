import { NgModule } from "@angular/core";
import { ClienteFormComponent } from "./cliente-form/cliente-form.component";
import { ClieteFormMoules } from "./cliente-form/cliente-form.module";
import { ClienteModule } from "./cliente/cliente.module";



@NgModule({
 
imports:[
    ClieteFormMoules,
    ClienteModule
    ]


})
export class CLientesModules{}