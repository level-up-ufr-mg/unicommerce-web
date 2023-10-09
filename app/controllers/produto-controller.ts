import { Produto } from "../models/produto.js";
import { Produtos } from "../models/produtos.js";

export class ProdutoController {

    private inputNome: HTMLInputElement;
    private inputPreco: HTMLInputElement;
    private inputDescricao: HTMLInputElement;
    private inputQuantidadeEstoque: HTMLInputElement;
    private inputCategoria: HTMLInputElement;
    private produtos: Produtos = new Produtos();

    constructor() {
        this.inputNome = document.querySelector('#nome');
        this.inputPreco = document.querySelector('#preco');
        this.inputDescricao = document.querySelector('#descricao');
        this.inputQuantidadeEstoque = document.querySelector('#quantidadeEstoque');
        this.inputCategoria = document.querySelector('#categoria');
    }

    adiciona(): void{
        // criar produto com os dados preenchidos
       const produto = this.criaProduto();
       this.produtos.add(produto);
       console.log(this.produtos.get());
        
        this.limparFormulario();
    }

    criaProduto(): Produto {
       const nome = this.inputNome.value;
       const preco = parseFloat(this.inputPreco.value);
       const descricao = this.inputDescricao.value;
       const quantidadeEstoque = parseInt(this.inputQuantidadeEstoque.value);
       const categoria = this.inputCategoria.value;
       
       return new Produto(nome, preco, descricao, quantidadeEstoque, categoria);
    }


    limparFormulario() {
        // limpar todos os campos do formulário
        this.inputNome.value = '';
        this.inputPreco.value = '';
        this.inputDescricao.value = '';
        this.inputQuantidadeEstoque.value = '';
        this.inputCategoria.value = '';
        this.inputNome.focus();
    }

}