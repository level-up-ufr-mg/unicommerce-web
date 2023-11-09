import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
export let ClienteComponent = class ClienteComponent {
    constructor() {
        this.nome = '';
        this.cpf = 0;
        this.telefone = 0;
        this.rua = '';
        this.numero = 0;
        this.complemento = '';
        this.bairro = '';
        this.cidade = '';
        this.estado = '';
    }
};
__decorate([
    Input()
], ClienteComponent.prototype, "nome", void 0);
__decorate([
    Input()
], ClienteComponent.prototype, "cpf", void 0);
__decorate([
    Input()
], ClienteComponent.prototype, "telefone", void 0);
__decorate([
    Input()
], ClienteComponent.prototype, "rua", void 0);
__decorate([
    Input()
], ClienteComponent.prototype, "numero", void 0);
__decorate([
    Input()
], ClienteComponent.prototype, "complemento", void 0);
__decorate([
    Input()
], ClienteComponent.prototype, "bairro", void 0);
__decorate([
    Input()
], ClienteComponent.prototype, "cidade", void 0);
__decorate([
    Input()
], ClienteComponent.prototype, "estado", void 0);
ClienteComponent = __decorate([
    Component({
        selector: 'app-cliente',
        templateUrl: './cliente.component.html',
        styleUrls: ['./cliente.component.css']
    })
], ClienteComponent);
//# sourceMappingURL=cliente.component.js.map