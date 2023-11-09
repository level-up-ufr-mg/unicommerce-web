import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
const API = 'http://localhost:8080/api';
export let CategoriaService = class CategoriaService {
    constructor(Http) {
        this.Http = Http;
    }
    get(id) {
        console.log("get:id");
        return this.Http.get(API + '/categoria/' + id);
    }
    getList() {
        console.log("get.list");
        return this.Http
            .get(API + '/categoria/lista');
    }
};
CategoriaService = __decorate([
    Injectable({ providedIn: 'root' })
], CategoriaService);
//# sourceMappingURL=categora.service.js.map