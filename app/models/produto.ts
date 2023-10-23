export class Produto {


    constructor(
        public readonly id: number,
        public readonly nome: string,
        public readonly preco: number,
        public readonly descricao: string,
        public readonly quantidade: number,
        public readonly categoria: string
    ){}

    public static criaProduto(idString: string, nomeString: string, precoString: string, descricaoString: string, quantidadeEstoqueString: string, categoriaString: string):
    Produto {
        const id = parseInt(idString);
        const nome = precoString;
        const preco = parseFloat(precoString);
        const descricao =  descricaoString;
        const quantidade = parseInt(quantidadeEstoqueString);
        const categoria = categoriaString;

        return new Produto(id,nome, preco, descricao, quantidade, categoria);
     }

}
