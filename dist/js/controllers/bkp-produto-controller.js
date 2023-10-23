import { Produtos } from "../models/produtos.js";
export class ProdutoController {
    constructor() {
        this.produtos = new Produtos();
    }
    adiciona() {
        // criar produto com os dados preenchidos
        this.limparFormulario();
    }
    limparFormulario() {
        // limpar todos os campos do formulário
    }
}
