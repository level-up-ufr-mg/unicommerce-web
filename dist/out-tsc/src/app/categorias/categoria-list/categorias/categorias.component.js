import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
export let CategoriasComponent = class CategoriasComponent {
    constructor() {
        this.categorias = [];
        this.rows = [];
    }
    ngOnChanges(changes) {
        console.log("CategoriasComponent");
        console.log(this.categorias);
        if (changes['categorias'])
            this.rows = this.groupColumns(this.categorias);
    }
    groupColumns(categorias) {
        const newRows = [];
        for (let index = 0; index < categorias.length; index += 3) {
            newRows.push(categorias.slice(index, index + 3));
        }
        return newRows;
    }
};
__decorate([
    Input()
], CategoriasComponent.prototype, "categorias", void 0);
CategoriasComponent = __decorate([
    Component({
        selector: 'ap-categorias',
        templateUrl: './categorias.component.html',
        styleUrls: ['./categorias.component.css']
    })
], CategoriasComponent);
//# sourceMappingURL=categorias.component.js.map