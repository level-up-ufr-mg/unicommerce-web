export class Produto {
    constructor(_Nome, _Preco, _Descicao, _Quantidade_Estoque, CategoriaID) {
        this._Nome = _Nome;
        this._Preco = _Preco;
        this._Descicao = _Descicao;
        this._Quantidade_Estoque = _Quantidade_Estoque;
        this.CategoriaID = CategoriaID;
    }
    get Nome() {
        return this._Nome;
    }
    get Preco() {
        return this._Preco;
    }
    get Descricao() {
        return this._Descicao;
    }
    get Quantidade_Estoque() {
        return this._Quantidade_Estoque;
    }
    get CategoriaId() {
        return this.CategoriaID;
    }
}
//# sourceMappingURL=produto.js.map