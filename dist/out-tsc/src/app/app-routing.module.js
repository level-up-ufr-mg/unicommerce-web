import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriaListModule } from './categorias/categoria-list/categoria-list.module';
import { CategoriaListResolver } from './categorias/categoria-list/categoria-list.resolver';
import { CategoriaFormComponent } from './categorias/categoria-form/categoria-form.component';
import { NotFoudComponent } from './erros/not-foud/not-foud.component';
import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';
const routes = [
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
export let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
    })
], AppRoutingModule);
//# sourceMappingURL=app-routing.module.js.map