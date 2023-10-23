import { View } from "./view.js";
export class ProdutosView extends View {
    template(model) {
        return `
         <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome Prod</th>
                    <th>Preco</th>
                    <th>Descricao</th>                
                    <th>Quantidade</th>
                    <th>Categoria</th>            
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(produto => {
            return `
                        <tr>
                            <td>${produto.id}</td>
                            <td>${produto.nome}</td>
                            <td>${produto.preco}</td>
                            <td>${produto.descricao}</td>
                            <td>${produto.quantidade}</td>
                            <td>${produto.categoria}</td>                            
                        </tr>
                    `;
        }).join('')}
            </tbody>
         </table>    
         `;
    }
    update(model) {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}
