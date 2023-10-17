import { Produto } from "./produto.js";

export class Produtos {

    private produtos: Produto[] = [];


    adiciona(produto: Produto) {
        this.produtos.push(produto);
    }

    lista(): readonly Produto[] {
        return this.produtos;
    }
}