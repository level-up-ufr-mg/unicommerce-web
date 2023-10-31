import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

  
import { ErrosModules } from './erros/erros.modules';
import { CategoriasModule } from './categorias/categorias.module';
import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';
import { CLientesModules } from './clientes/clientes.modules';
import { ClienteComponent } from './clientes/cliente/cliente.component';
 

@NgModule({
  declarations: [
    AppComponent,
     
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ErrosModules,
    CategoriasModule,
    CLientesModules

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 