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
    private ProdutosView = new ProdutosView('#produtosView', true);
    private mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this.inputNome = <HTMLInputElement>document.querySelector('#nome');
        this.inputPreco = <HTMLInputElement>document.querySelector('#preco');
        this.inputDescricao = <HTMLInputElement>document.querySelector('#descricao');
        this.inputQuantidadeEstoque = <HTMLInputElement>document.querySelector('#quantidadeEstoque');
        this.inputCategoria = <HTMLInputElement>document.querySelector('#categoria');
        this.ProdutosView.update(this.produtos);
    }

    public adiciona(): void{
        // criar produto com os dados preenchidos
       const produto = Produto.criaProduto(
            this.inputNome.value,
            this.inputPreco.value,
            this.inputDescricao.value,
            this.inputQuantidadeEstoque.value,
            this.inputCategoria.value 
       );

       this.produtos.add(produto);
       this.limparFormulario();
       this.atualizaView();
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

    private atualizaView(): void {
       this.ProdutosView.update(this.produtos);
       this.mensagemView.update('Produto adicionado com sucesso');
    }

}