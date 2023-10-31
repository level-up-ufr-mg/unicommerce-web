export class View {
    constructor(seletor, escapar) {
        this.escapart = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error('Seletor${seletor} nao existe no DOW ');
        }
        if (escapar) {
            this.escapart = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapart) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
