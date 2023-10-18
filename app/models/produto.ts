//import { Categoria } from "./categoria.js";

export class Produto {

    constructor(
        public readonly nome: string, 
        public readonly preco: number, 
        public readonly descricao: string, 
        public readonly quantidadeEstoque: number, 
        public readonly categoria: string
    ) {}

    public static criaProduto(nomeString: string, precoString: string, descricaoString: string, quantidadeEstoqueString: string, categoriaString: string): Produto {
        const nome = precoString;
        const preco = parseFloat(precoString);
        const descricao =  descricaoString;
        const quantidadeEstoque = parseInt(quantidadeEstoqueString);
        const categoria = categoriaString;
        
        return new Produto(nome, preco, descricao, quantidadeEstoque, categoria);
     }

}