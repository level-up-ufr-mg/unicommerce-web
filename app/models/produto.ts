export class Produto {
   private _nome: string;
   private _preco: number;
   private _descricao: string;
   private _quantidadeEstoque: number;
   private _categoria: string;

   constructor(nome: string, preco: number, descricao: string, quantidadeEstoque: number, categoria: string) {
    this._nome = nome;
    this._preco = preco;
    this._descricao = descricao;
    this._quantidadeEstoque = quantidadeEstoque;
    this._categoria = categoria;
  }

  getNome(): string {
    return this._nome;
  }

  getPreco(): number {
    return this._preco;
  }

  getDescricao(): string {
    return this._descricao;
  }

  getQuantidadeEstoque(): number {
    return this._quantidadeEstoque;
  }

  getCategoria(): string {
    return this._categoria;
  }

}