import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
const API = 'http://localhost:8080/api';
export let ClienteService = class ClienteService {
    constructor(Http) {
        this.Http = Http;
    }
    get(nome) {
        console.log("get:nome");
        return this.Http.get(API + '/cliente/' + nome);
    }
    getLit() {
        console.log("get.list");
        return this.Http.get(API + 'cliente/lista');
    }
};
ClienteService = __decorate([
    Injectable({ providedIn: 'root' })
], ClienteService);
//# sourceMappingURL=cliente.service.js.map