import { Produto } from "../models/produto.js";
import { Produtos } from "../models/produtos.js";
import { MensagemView } from "../views/mensagem-view.js";
import { ProdutosView } from "../views/produtos-view.js";

export class ProdutoController {
    private inputNome: HTMLInputElement;
    private inputPreco: HTMLInputElement;
    private inputDescricao: HTMLInputElement;
    private inputQuantidadeEstoque: HTMLInputElement;
    private inputCategoria: HTMLInputElement;
    private produtos: Produtos = new Produtos();
    private produtosView = new ProdutosView('#produtosView');
    private mensagemView = new MensagemView('#mensagemView');

    //Campos do DOM (id do input)
    constructor() {
        this.inputNome = document.querySelector('#nome');
        this.inputPreco = document.querySelector('#preco');
        this.inputDescricao = document.querySelector('#descricao');
        this.inputQuantidadeEstoque = document.querySelector('#quantidadeEstoque');
        this.inputCategoria = document.querySelector('#categoria');
        this.produtosView.update(this.produtos);
    }

    private criaProduto(): Produto {
        const nome = this.inputNome.value;
        const preco = parseFloat(this.inputPreco.value);
        const descricao = this.inputDescricao.value;
        const quantidadeEstoque = parseInt(this.inputQuantidadeEstoque.value);
        const categoria = this.inputCategoria.value;
        
        return new Produto(nome, preco, descricao, quantidadeEstoque, categoria);
     }

     private limparFormulario() {
        // limpar todos os campos do formulário
                this.inputNome.value = '';
                this.inputPreco.value = '';
                this.inputDescricao.value = '';
                this.inputQuantidadeEstoque.value = '';
                this.inputCategoria.value = '';
                this.inputNome.focus(); 
            }

    public adiciona(): void{
        // criar produto com os dados preenchidos
        const produto = this.criaProduto();
        this.produtos.add(produto);
        this.limparFormulario();
        this.atualizaView();
        console.log(produto);
    }


    private atualizaView(): void{
        this.produtosView.update(this.produtos);
        this.mensagemView.update('Negociação adicionada com sucesso!');

    }

    }
