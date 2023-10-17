import { Produto } from "../models/produto.js";
import { Produtos } from "../models/produtos.js";
import { MensagemView } from "../views/mensagem-view.js";
import { ProdutosView } from "../views/produto-view.js";

export class ProdutoController {

    private inputNome : HTMLInputElement;
    private inputPreco : HTMLInputElement;
    private inputDescricao : HTMLInputElement;
    private inputQuantidade : HTMLInputElement;
    private inputCategoria : HTMLInputElement;
    private produtoView = new ProdutosView('#produtoView', true);
    private mensagemView = new MensagemView('#mensagemView');

    private produtos: Produtos = new Produtos();

    constructor() {
        this.inputNome = document.querySelector('#nome') as HTMLInputElement ;
        this.inputPreco = document.querySelector('#preco')as HTMLInputElement ;
        this.inputDescricao = document.querySelector('#descricao')as HTMLInputElement ;
        this.inputQuantidade = document.querySelector('#quantidadeEstoque')as HTMLInputElement ;
        this.inputCategoria = document.querySelector('#categoria')as HTMLInputElement ;
        this.produtoView.update(this.produtos);

    }

    public adiciona(): void {

       // const nome = this.inputNome.value;
       // const preco = parseFloat(this.inputPreco.value);
       // const descricao = this.inputDescricao.value;
       // const quantidade = parseInt(this.inputQuantidade.value);
       // const categoria = this.inputCategoria.value;

       const produto = this.criaProduto();

        
        this.produtos.add(produto);
        this.limparFormulario();
        this.atualizaView();
    }

    private criaProduto(): Produto {

        const nome: string = this.inputNome.value;
        const preco: number = parseFloat(this.inputPreco.value);
        const descricao: string = this.inputDescricao.value;
        const quantidade: number = parseInt(this.inputQuantidade.value);
        const categoria: string =  this.inputCategoria.value;

        
       if (preco <= 0) {
        throw new Error("Produto deve possuir um preço maior que 0");
        }

        if (!categoria.trim()) {
            throw new Error("Produto deve possuir uma categoria");
        }

        if (quantidade <= 0) {
            throw new Error("Quantidade em estoque deve ser maior que 0");
        }

        return new Produto(nome, preco, descricao, quantidade, categoria);

        }

    private limparFormulario(): void {
        // limpar todos os campos do formulário
        this.inputNome.value = '';
        this.inputPreco.value = '';
        this.inputDescricao.value = '';
        this.inputQuantidade.value = '';
        this.inputCategoria.value = '';
        this.inputNome.focus();
    }

    private atualizaView(): void{
        this.produtoView.update(this.produtos);
        this.mensagemView.update('Produto cadastrado com sucesso!');
    } 
}