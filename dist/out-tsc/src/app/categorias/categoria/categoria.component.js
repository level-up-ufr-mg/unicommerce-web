import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
export let CategoriaComponent = class CategoriaComponent {
    constructor() {
        this.id = 0;
        this.nome = '';
        this.ativo = false;
    }
};
__decorate([
    Input()
], CategoriaComponent.prototype, "id", void 0);
__decorate([
    Input()
], CategoriaComponent.prototype, "nome", void 0);
__decorate([
    Input()
], CategoriaComponent.prototype, "ativo", void 0);
CategoriaComponent = __decorate([
    Component({
        selector: 'app-categoria',
        templateUrl: './categoria.component.html',
        styleUrls: ['./categoria.component.css']
    })
], CategoriaComponent);
//# sourceMappingURL=categoria.component.js.map