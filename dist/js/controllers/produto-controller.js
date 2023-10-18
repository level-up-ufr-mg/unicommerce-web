import { Produto } from "../models/produto.js";
import { Produtos } from "../models/produtos.js";
import { MensagemView } from "../views/mensagem-view.js";
import { ProdutosView } from "../views/produtos-view.js";
export class ProdutoController {
    constructor() {
        this.produtos = new Produtos();
        this.ProdutosView = new ProdutosView('#produtosView', true);
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputNome = document.querySelector('#nome');
        this.inputPreco = document.querySelector('#preco');
        this.inputDescricao = document.querySelector('#descricao');
        this.inputQuantidadeEstoque = document.querySelector('#quantidadeEstoque');
        this.inputCategoria = document.querySelector('#categoria');
        this.ProdutosView.update(this.produtos);
    }
    adiciona() {
        const produto = Produto.criaProduto(this.inputNome.value, this.inputPreco.value, this.inputDescricao.value, this.inputQuantidadeEstoque.value, this.inputCategoria.value);
        this.produtos.add(produto);
        this.limparFormulario();
        this.atualizaView();
    }
    limparFormulario() {
        this.inputNome.value = '';
        this.inputPreco.value = '';
        this.inputDescricao.value = '';
        this.inputQuantidadeEstoque.value = '';
        this.inputCategoria.value = '';
        this.inputNome.focus();
    }
    atualizaView() {
        this.ProdutosView.update(this.produtos);
        this.mensagemView.update('Produto adicionado com sucesso');
    }
}
