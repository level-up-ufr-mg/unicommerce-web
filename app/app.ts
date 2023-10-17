import { ProdutoController } from "./controllers/produto-controller.js";

const produtoController = new ProdutoController();
const form = document.querySelector(".form");
if(form){
    form.addEventListener('submit', event => {
        event.preventDefault();
        produtoController.adiciona();
    });
}else{
    throw Error ('Não foi possivel inicializar a aplicação. Verifique se o form existe.');
}


