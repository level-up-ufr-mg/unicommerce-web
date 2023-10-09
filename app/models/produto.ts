import { Categoria } from "./Categoria.js";



export class Produto {


    
    constructor (private _Nome: String ,
                 private _Preco : number ,
                 private _Descicao: String ,
                 private _Quantidade_Estoque : number,
                 private CategoriaID :Categoria ){



                 }

                 
    get Nome(): String {
        return this._Nome;
    }


    get Preco (): number{
        return this._Preco;
    }
                
    get Descricao(): String {
        return this._Descicao;
    }


    get Quantidade_Estoque (): number {
        return this._Quantidade_Estoque;
    }
                
    get CategoriaId(): Categoria {
        return this.CategoriaID;
    }


 


}