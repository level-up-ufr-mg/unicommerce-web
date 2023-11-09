import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { CategoriaListComponent } from "./categoria-list.component";
import { CategoriasComponent } from './categorias/categorias.component';
import { CardModule } from "src/app/shared/components/card/card.module";
import { DarkenOnHoverModule } from "src/app/shared/directives/darken-on-hover/darken-on-hover.module";
import { CommonModule } from "@angular/common";
import { CategoriaModule } from "../categoria/categoria.module";
export let CategoriaListModule = class CategoriaListModule {
};
CategoriaListModule = __decorate([
    NgModule({
        declarations: [
            CategoriaListComponent,
            CategoriasComponent
        ],
        imports: [
            CategoriaModule,
            CommonModule,
            CardModule,
            DarkenOnHoverModule
        ],
    })
], CategoriaListModule);
//# sourceMappingURL=categoria-list.module.js.map