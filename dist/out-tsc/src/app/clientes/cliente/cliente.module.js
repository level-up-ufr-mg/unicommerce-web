import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ClienteComponent } from './cliente.component';
export let ClienteModule = class ClienteModule {
};
ClienteModule = __decorate([
    NgModule({
        declarations: [ClienteComponent],
        imports: [CommonModule,
            HttpClientModule],
        exports: [ClienteComponent]
    })
], ClienteModule);
//# sourceMappingURL=cliente.module.js.map