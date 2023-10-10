//import { Categoria } from "./categoria.js";

export class Produto {

    constructor(
        private readonly nome: string, 
        public readonly preco: number, 
        private readonly descricao: string, 
        public readonly quantidadeEstoque: number, 
        public readonly categoria: string
    ) {}

}