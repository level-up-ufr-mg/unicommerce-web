import { Produto } from "../models/produto.js";
import { Produtos } from "../models/produtos.js";

export class ProdutoController {

    private produtos: Produtos = new Produtos();

    constructor() {
    }

    adiciona(): void{
        // criar produto com os dados preenchidos
        
        this.limparFormulario();
    }

    limparFormulario() {
        // limpar todos os campos do formulário
    }

}