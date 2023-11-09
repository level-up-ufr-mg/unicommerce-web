import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
export let CategoriaListResolver = class CategoriaListResolver {
    constructor(service) {
        this.service = service;
    }
    resolve(route, state) {
        console.log("CategoriaListResolver");
        return this.service.getList();
    }
};
CategoriaListResolver = __decorate([
    Injectable({ providedIn: 'root' })
], CategoriaListResolver);
//# sourceMappingURL=categoria-list.resolver.js.map