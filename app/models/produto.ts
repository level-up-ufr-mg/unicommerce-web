export class Produto {


    constructor(
        public readonly id: number,
        public readonly nome: string,
        public readonly preco: number,
        public readonly descricao: string,
        public readonly quantidade: number,
        public readonly categoria: string
    ){}

}
