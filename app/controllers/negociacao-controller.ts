import { DiasDaSemana } from '../enums/dias-da-semanas.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView' );
    private mensagemView = new MensagemView('#mensagemView' );
    private readonly Sabado = 6;
    private readonly Domingo = 0;

    constructor() {
        this.inputData = <HTMLInputElement>document.querySelector('#data') ;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void {
        const negociacaotemp =  Negociacao.ciaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value

        );
         
        if(!this.ehDiaUtiu(negociacaotemp.data)){
            this.mensagemView.update("Apenas negociaçoes em dias uteis sao aceitas");
        return;
        }

        this.negociacoes.adiciona(negociacaotemp);
        this.limparFormulario();
        this.atualizaView();
     
    }

   
   private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }




    private atualizaView():void{
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }

    private ehDiaUtiu(data : Date){
    return data.getDay() >DiasDaSemana.Domingo && data.getDay()  <DiasDaSemana.Sabado;
    }

}
