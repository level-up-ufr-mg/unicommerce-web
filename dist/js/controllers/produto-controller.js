import { Produto } from "../models/produto.js";
import { Produtos } from "../models/produtos.js";
import { ProdutosView } from "../views/produtos-view.js";
import { MensagemView } from "../views/mensagem-view.js";
export class ProdutoController {
    constructor() {
        this.produtosView = new ProdutosView('#produtosView', true);
        this.mensagemView = new MensagemView('#mensagemView');
        this.produtos = new Produtos();
        this.inputId = document.querySelector('#id');
        this.inputNome = document.querySelector('#nome');
        this.inputPreco = document.querySelector('#preco');
        this.inputDescricao = document.querySelector('#descricao');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputCategoria = document.querySelector('#categoria');
        //this.produtosView.template
        this.produtosView.atualizaView(this.produtos);
    }
    adiciona() {
        const produto = Produto.criaProduto(this.inputId.value, this.inputNome.value, this.inputPreco.value, this.inputDescricao.value, this.inputQuantidade.value, this.inputCategoria.value);
        this.produtos.adiciona(produto);
        this.limparFormulario();
        this.atualizaView();
    }
    limparFormulario() {
        this.inputId.value = '';
        this.inputNome.value = '';
        this.inputPreco.value = '';
        this.inputDescricao.value = '';
        this.inputQuantidade.value = '';
        this.inputCategoria.value = '';
        this.inputId.focus();
    }
    atualizaView() {
        this.produtosView.update(this.produtos);
        this.mensagemView.atualizaView('Produto adicionado com sucesso');
    }
}
