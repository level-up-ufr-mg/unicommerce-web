import { View } from "./view.js";
export class ProdutosView extends View {
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>NOME</th>
                    <th>PREÇO</th>
                    <th>DESCRIÇÃO</th>
                    <th>QUANTIDADE EM ESTOQUE</th>
                    <th>CATEGORIA</th>
                </tr>
            </thead>
            <tbody>
                ${model.get().map(produto => {
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
