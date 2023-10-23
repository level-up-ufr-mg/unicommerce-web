import { ProdutoController } from "./controllers/produto-controller.js";

const controller = new ProdutoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe.');
}


//import { ProdutoController } from "./controllers/produto-controller.js";
//import { Produto } from "./models/produto.js";

//const produto = new Produto (1,"monitor",10,"Monitor 22 pol",10,"informatica");
//console.log(produto);
/*const produtoController = new ProdutoController();
const form = document.querySelector(".form");
form.addEventListener('submit', event => {
    event.preventDefault();
    produtoController.adiciona();
});
*/