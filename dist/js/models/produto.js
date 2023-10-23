export class Produto {
    constructor(id, nome, preco, descricao, quantidade, categoria) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.categoria = categoria;
    }
    static criaProduto(idString, nomeString, precoString, descricaoString, quantidadeEstoqueString, categoriaString) {
        const id = parseInt(idString);
        const nome = precoString;
        const preco = parseFloat(precoString);
        const descricao = descricaoString;
        const quantidade = parseInt(quantidadeEstoqueString);
        const categoria = categoriaString;
        return new Produto(id, nome, preco, descricao, quantidade, categoria);
    }
}
