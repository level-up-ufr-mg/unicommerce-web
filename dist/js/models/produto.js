export class Produto {
    constructor(nome, preco, descricao, quantidadeEstoque, categoria) {
        this._nome = nome;
        this._preco = preco;
        this._descricao = descricao;
        this._quantidadeEstoque = quantidadeEstoque;
        this._categoria = categoria;
    }
    get nome() {
        return this._nome;
    }
    get preco() {
        return this._preco;
    }
    get descricao() {
        return this._descricao;
    }
    get quantidadeEstoque() {
        return this._quantidadeEstoque;
    }
    get categoria() {
        return this._categoria;
    }
}
