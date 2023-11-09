import { Produto } from "../models/produto.js";
import { Produtos } from "../models/produtos.js";
export class ProdutoController {
    constructor() {
        this.produtos = new Produtos();
        this.inputNome = document.querySelector('#nome');
        this.inputPreco = document.querySelector('#preco');
        this.inputDescricao = document.querySelector('#descricao');
        this.inputQuantidadeEstoque = document.querySelector('#quantidadeEstoque');
        this.inputCategoria = document.querySelector('#categoria');
    }
    adiciona() {
        // criar produto com os dados preenchidos
        const produto = this.criarProduto();
        this.produtos.add(produto);
        console.log(this.produtos.get());
        this.limparFormulario();
    }
    limparFormulario() {
        // limpar todos os campos do formulário
        this.inputNome.value = '';
        this.inputDescricao.value = '';
        this.inputPreco.value = '';
        this.inputQuantidadeEstoque.value = '';
        this.inputCategoria.value = '';
    }
    criarProduto() {
        const nome = this.inputNome.value;
        const descricao = this.inputDescricao.value;
        const categoria = this.inputCategoria.value;
        const preco = parseFloat(this.inputPreco.value);
        const quantidadeEstoque = parseInt(this.inputQuantidadeEstoque.value);
        return new Produto(nome, preco, descricao, quantidadeEstoque, categoria);
    }
}
