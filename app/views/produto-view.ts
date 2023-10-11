import { Produtos } from "../models/produtos.js";
import { View } from "./view.js";

export class ProdutosView extends View<Produtos> {

    protected template(model: Produtos): string {
         
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Descrição</th>
                    <th>Quantidade Estoque</th>
                    <th>Categoria</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(produto => {
                    return `
                        <tr>
                            <td>${produto.nome}</td>
                            <td>${produto.preco}</td>
                            <td>${produto.descricao}</td>
                            <td>${produto.quantidadeEstoque}</td>
                            <td>${produto.categoria}</td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
        `;
    }
    
}