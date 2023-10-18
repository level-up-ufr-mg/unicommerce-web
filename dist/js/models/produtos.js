export class Produtos {
    constructor() {
        this.produtos = [];
    }
    add(novo) {
        this.produtos.push(novo);
    }
    get() {
        return this.produtos;
    }
}
