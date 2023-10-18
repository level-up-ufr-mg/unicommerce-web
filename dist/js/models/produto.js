export class Produto {
    constructor(nome, preco, descricao, quantidadeEstoque, categoria) {
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.quantidadeEstoque = quantidadeEstoque;
        this.categoria = categoria;
    }
    static criaProduto(nomeString, precoString, descricaoString, quantidadeEstoqueString, categoriaString) {
        const nome = precoString;
        const preco = parseFloat(precoString);
        const descricao = descricaoString;
        const quantidadeEstoque = parseInt(quantidadeEstoqueString);
        const categoria = categoriaString;
        return new Produto(nome, preco, descricao, quantidadeEstoque, categoria);
    }
}
