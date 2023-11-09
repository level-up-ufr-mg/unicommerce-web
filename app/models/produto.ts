import { Categoria } from "./categoria";

export class Produto {
    constructor(
        private readonly _nome: string,
        private readonly _preco: number,
        private readonly _descricao: string,
        private readonly _quantidadeEstoque: number,
        private readonly _categoria: string
    ) {}

    get nome(): string {
        return this._nome;
    }

    get preco(): number {
        return this._preco;
    }

    get descricao(): string {
        return this._descricao;
    }

    get quantidadeEstoque(): number {
        return this._quantidadeEstoque;
    }

    get categoria(): string {
        return this._categoria;
    }
}