import { Categoria } from "../models/Categoria.js";
import { Produto } from "../models/produto.js";
import { Produtos } from "../models/produtos.js";

export class ProdutoController {
    private inputNome : HTMLInputElement;
    private inputPreco : HTMLInputElement;
    private inputDescricao : HTMLInputElement;
    private inputQuantidadeEstoque : HTMLInputElement;
    private inputCategoria : HTMLInputElement;


    private produtos: Produtos = new Produtos();

    constructor() {
        this.inputNome = document.querySelector('#Nome')
        this.inputPreco = document.querySelector('#Preco')
        this.inputDescricao = document.querySelector('#Descricao')
        this.inputQuantidadeEstoque = document.querySelector('#Quantidade_Estoque')
        this.inputCategoria = document.querySelector('#Preco')
        
    }

    adiciona(): void{
        // criar produto com os dados preenchidos
        const produto = this.criarProduto();
        this.produtos.add(produto);
        this.produtos.get;
        console.log(this.produtos.get);
        this.limparFormulario();
    }


    criarProduto(){
        const nome  = this.inputNome.value;
        const Descricao  = this.inputDescricao.value;
        const Categoria  = this.inputCategoria.value;

        const Preco = parseInt(this.inputPreco.value);
        const Quantidade_Estoque = parseInt(this.inputQuantidadeEstoque.value);

        return new Produto(nome,Preco,Descricao,Quantidade_Estoque,Categoria);

    }



    limparFormulario() {
       this.inputNome.value ='';
       this.inputDescricao.value = '';
       this.inputPreco.value ='';
       this.inputQuantidadeEstoque.value='';
       this.inputCategoria.value=''; 
    }

}