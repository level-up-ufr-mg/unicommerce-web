import { Produto } from "../models/produto.js";
import { Produtos } from "../models/produtos.js";
import { MensagemView } from "../views/mensagem-view.js";
import { ProdutosView } from "../views/produtos-view.js";
export class ProdutoController {
    //Campos do DOM (id do input)
    constructor() {
        this.produtos = new Produtos();
        this.produtosView = new ProdutosView('#produtosView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputNome = document.querySelector('#nome');
        this.inputPreco = document.querySelector('#preco');
        this.inputDescricao = document.querySelector('#descricao');
        this.inputQuantidadeEstoque = document.querySelector('#quantidadeEstoque');
        this.inputCategoria = document.querySelector('#categoria');
        this.produtosView.update(this.produtos);
    }
    criaProduto() {
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
    adiciona() {
        // criar produto com os dados preenchidos
        const produto = this.criaProduto();
        this.produtos.add(produto);
        this.limparFormulario();
        this.atualizaView();
        console.log(produto);
    }
    atualizaView() {
        this.produtosView.update(this.produtos);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }
}
