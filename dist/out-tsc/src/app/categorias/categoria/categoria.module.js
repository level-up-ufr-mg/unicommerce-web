import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CategoriaComponent } from './categoria.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
export let CategoriaModule = class CategoriaModule {
};
CategoriaModule = __decorate([
    NgModule({
        declarations: [CategoriaComponent],
        imports: [
            CommonModule,
            HttpClientModule
        ],
        exports: [CategoriaComponent]
    })
], CategoriaModule);
//# sourceMappingURL=categoria.module.js.map