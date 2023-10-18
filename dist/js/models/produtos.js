export class Produtos {
    constructor() {
        this.produtos = [];
    }
    //adiciona produtos no array/lista
    add(novo) {
        this.produtos.push(novo);
    }
    //Renderização da lista
    lista() {
        return this.produtos;
    }
    get() {
        return this.produtos;
    }
}
