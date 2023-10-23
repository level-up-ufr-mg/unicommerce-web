import { Produto } from "../models/produto.js";
import { Produtos } from "../models/produtos.js";
import { ProdutosView } from "../views/produtos-view.js";
import { MensagemView } from "../views/mensagem-view.js";

export class ProdutoController{
   

    private inputId: HTMLInputElement;
    private inputNome: HTMLInputElement;
    private inputPreco: HTMLInputElement;
    private inputDescricao: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputCategoria: HTMLInputElement;
    private produtosView = new ProdutosView('#produtosView',true);
    private mensagemView = new MensagemView('#mensagemView');


    private id: number;
    private nome: string;
    private preco: number;
    private descricao: string;
    private quantidade: number;
    private categoria: string;
    public produto: Produto;
    private  produtos = new Produtos();
  


    constructor() {
        this.inputId = <HTMLInputElement>document.querySelector('#id');
        this.inputNome = <HTMLInputElement>document.querySelector('#nome');
        this.inputPreco = <HTMLInputElement>document.querySelector('#preco');
        this.inputDescricao = <HTMLInputElement>document.querySelector('#descricao');
        this.inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this.inputCategoria = <HTMLInputElement>document.querySelector('#categoria');
        //this.produtosView.template
        this.produtosView.atualizaView(this.produtos);
    }

    public adiciona(): void{

        const produto = Produto.criaProduto(
            this.inputId.value,
            this.inputNome.value,
            this.inputPreco.value,
            this.inputDescricao.value,
            this.inputQuantidade.value,
            this.inputCategoria.value,
        );
        this.produtos.adiciona(produto);
        this.limparFormulario();
        this.atualizaView();

    }

    private limparFormulario(): void{
        this.inputId.value = '';
        this.inputNome.value = '';
        this.inputPreco.value = '';
        this.inputDescricao.value = '';
        this.inputQuantidade.value = '';
        this.inputCategoria.value = '';
        this.inputId.focus();
    }

    private atualizaView(): void {
        this.produtosView.update(this.produtos);
        this.mensagemView.atualizaView('Produto adicionado com sucesso');
     }
}