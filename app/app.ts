import { ProdutoController } from "./controllers/produto-controller.js";

const controller = new ProdutoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    controller.adiciona();
});



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