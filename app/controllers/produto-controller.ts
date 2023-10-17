import { Produto } from "../models/produto.js";

export class ProdutoController{

    private inputId: HTMLInputElement;
    private inputNome: HTMLInputElement;
    private inputPreco: HTMLInputElement;
    private inputDescricao: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputCategoria: HTMLInputElement;

    private id: number;
    private nome: string;
    private preco: number;
    private descricao: string;
    private quantidade: number;
    private categoria: string;


    constructor() {
        this.inputId = document.querySelector('#id');
        this.inputNome = document.querySelector('#nome');
        this.inputPreco = document.querySelector('#preco');
        this.inputDescricao = document.querySelector('#descricao');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputCategoria = document.querySelector('#categoria');
    }

    adiciona(): void{

        const produto = this.criaProduto();
        console.log(produto);
        this.limparFormulario();
    }

    criaProduto(): Produto{
        const id= parseInt(this.inputId.value);
        const nome= this.inputNome.value;
        const preco= parseFloat(this.inputPreco.value);
        const descricao= this.inputDescricao.value;
        const quantidade= parseInt(this.inputQuantidade.value);
        const categoria=this.inputCategoria.value;
        return new Produto(id, nome, preco, descricao,quantidade,categoria);
    }

    limparFormulario(): void{
        this.inputId.value = '';
        this.inputNome.value = '';
        this.inputPreco.value = '';
        this.inputDescricao.value = '';
        this.inputQuantidade.value = '';
        this.inputCategoria.value = '';
        this.inputId.focus();
    }
}