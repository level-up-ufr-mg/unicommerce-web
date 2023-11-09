import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let CategoriaListComponent = class CategoriaListComponent {
    constructor(activatedRoute, categoriaService) {
        this.activatedRoute = activatedRoute;
        this.categoriaService = categoriaService;
        this.categorias = [];
    }
    ngOnInit() {
        this.categorias = this.activatedRoute.snapshot.data['categorias'];
    }
    load() {
        this.categoriaService
            .getList()
            .subscribe(categorias => {
            this.categorias = this.categorias.concat(categorias);
        });
        console.log("CategoriaListComponent");
        console.log(this.categorias);
    }
};
CategoriaListComponent = __decorate([
    Component({
        selector: 'app-categoria-list',
        templateUrl: './categoria-list.component.html',
        styleUrls: ['./categoria-list.component.css']
    })
], CategoriaListComponent);
//# sourceMappingURL=categoria-list.component.js.map