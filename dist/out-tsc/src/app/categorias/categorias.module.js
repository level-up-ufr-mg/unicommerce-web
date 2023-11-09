import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { CategoriaFormModule } from "./categoria-form/categoria-form.module";
import { CategoriaListModule } from "./categoria-list/categoria-list.module";
import { DarkenOnHoverModule } from "../shared/directives/darken-on-hover/darken-on-hover.module";
import { CategoriaModule } from "./categoria/categoria.module";
export let CategoriasModule = class CategoriasModule {
};
CategoriasModule = __decorate([
    NgModule({
        imports: [CategoriaModule,
            CategoriaFormModule,
            CategoriaListModule,
            DarkenOnHoverModule
        ]
    })
], CategoriasModule);
//# sourceMappingURL=categorias.module.js.map