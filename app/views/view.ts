export abstract class View<T> {
    private escapart = false;
    protected elemento: HTMLElement;

    constructor(seletor: string , escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if(elemento){
            this.elemento = elemento as HTMLElement ;
        }else{
            throw Error('Seletor${seletor} nao existe no DOW ');
        }
        
        if(escapar){
            this.escapart = escapar;
        }
    }

   public update(model: T): void {
        let template = this.template(model);
        if(this.escapart){
            template = template.replace(/<script>[\s\S]*?<\/script>/,'');
        }
        this.elemento.innerHTML = template;
    }

   protected abstract template(model: T): string;
}