import { Produto } from "./produto.js";

export class Produtos {

    private produtos: Produto[] = [];

    public add(novo: Produto): void {
        this.produtos.push(novo);
    }

    public get(): readonly Produto[] {
        return this.produtos;
    }
}