import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaListModule } from './categorias/categoria-list/categoria-list.module';
import { CategoriaListResolver } from './categorias/categoria-list/categoria-list.resolver';
import { CategoriaFormComponent } from './categorias/categoria-form/categoria-form.component';
import { NotFoudComponent } from './erros/not-foud/not-foud.component';
import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';

const routes: Routes = [
  {
    path: 'categoria/lista',
    component: CategoriaListModule,
    resolve: {
      photos: CategoriaListResolver,
    },
  },
  {
    path: 'categoria',
    component: CategoriaFormComponent,
  },
  {
    path: 'cliente',
    component: ClienteFormComponent,
  },
  {
    path: '**',
    component: NotFoudComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
