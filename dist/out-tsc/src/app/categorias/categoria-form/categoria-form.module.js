import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { CategoriaFormComponent } from "./categoria-form.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
export let CategoriaFormModule = class CategoriaFormModule {
};
CategoriaFormModule = __decorate([
    NgModule({
        declarations: [CategoriaFormComponent],
        imports: [
            CommonModule,
            HttpClientModule
        ],
        exports: [CategoriaFormComponent]
    })
], CategoriaFormModule);
//# sourceMappingURL=categoria-form.module.js.map