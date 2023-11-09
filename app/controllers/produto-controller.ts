import { Produto } from "../models/produto.js";
import { Produtos } from "../models/produtos.js";

export class ProdutoController {

    private produtos: Produtos = new Produtos();
    
    private inputNome : HTMLInputElement;
    private inputPreco : HTMLInputElement;
    private inputDescricao : HTMLInputElement;
    private inputQuantidadeEstoque : HTMLInputElement;
    private inputCategoria : HTMLInputElement;

    constructor() {
        this.inputNome = document.querySelector('#nome') as HTMLInputElement;
        this.inputPreco = document.querySelector('#preco') as HTMLInputElement;
        this.inputDescricao = document.querySelector('#descricao') as HTMLInputElement;
        this.inputQuantidadeEstoque = document.querySelector('#quantidadeEstoque') as HTMLInputElement;
        this.inputCategoria = document.querySelector('#categoria') as HTMLInputElement;
    }

    adiciona(): void{
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

    criarProduto(){
        const nome = this.inputNome.value;
        const descricao = this.inputDescricao.value;
        const categoria = this.inputCategoria.value;

        const preco = parseFloat(this.inputPreco.value);
        const quantidadeEstoque = parseInt(this.inputQuantidadeEstoque.value);

        return new Produto(nome, preco, descricao, quantidadeEstoque, categoria);
    }
}
