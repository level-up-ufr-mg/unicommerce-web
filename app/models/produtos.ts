import { Produto } from "./produto.js";

export class Produtos {

    private produtos: Produto[] = [];

    //adiciona produtos no array/lista
    public add(novo: Produto): void {
        this.produtos.push(novo);
    }

    //Renderização da lista
    lista(): ReadonlyArray<Produto>{
        return this.produtos; 
    }

    public get(): readonly Produto[] {
        return this.produtos;
    }
}