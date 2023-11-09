import { Produto } from "../models/produto.js";
import { Produtos } from "../models/produtos.js";
export class ProdutoController {
    constructor() {
        this.produtos = new Produtos();
        this.inputNome = document.querySelector('#Nome');
        this.inputPreco = document.querySelector('#Preco');
        this.inputDescricao = document.querySelector('#Descricao');
        this.inputQuantidadeEstoque = document.querySelector('#Quantidade_Estoque');
        this.inputCategoria = document.querySelector('#Preco');
    }
    adiciona() {
        // criar produto com os dados preenchidos
        const produto = this.criarProduto();
        this.produtos.add(produto);
        this.produtos.get;
        console.log(this.produtos.get);
        this.limparFormulario();
    }
    criarProduto() {
        const nome = this.inputNome.value;
        const Descricao = this.inputDescricao.value;
        const Categoria = this.inputCategoria.value;
        const Preco = parseInt(this.inputPreco.value);
        const Quantidade_Estoque = parseInt(this.inputQuantidadeEstoque.value);
        return new Produto(nome, Preco, Descricao, Quantidade_Estoque, Categoria);
    }
    limparFormulario() {
        this.inputNome.value = '';
        this.inputDescricao.value = '';
        this.inputPreco.value = '';
        this.inputQuantidadeEstoque.value = '';
        this.inputCategoria.value = '';
    }
}
//# sourceMappingURL=produto-controller.js.map