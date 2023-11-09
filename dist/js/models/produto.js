export class Produto {
    constructor(_nome, _preco, _descricao, _quantidadeEstoque, _categoria) {
        this._nome = _nome;
        this._preco = _preco;
        this._descricao = _descricao;
        this._quantidadeEstoque = _quantidadeEstoque;
        this._categoria = _categoria;
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
