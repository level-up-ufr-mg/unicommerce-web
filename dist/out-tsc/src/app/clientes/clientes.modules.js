import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { ClieteFormMoules } from "./cliente-form/cliente-form.module";
import { ClienteModule } from "./cliente/cliente.module";
export let CLientesModules = class CLientesModules {
};
CLientesModules = __decorate([
    NgModule({
        imports: [
            ClieteFormMoules,
            ClienteModule
        ]
    })
], CLientesModules);
//# sourceMappingURL=clientes.modules.js.map