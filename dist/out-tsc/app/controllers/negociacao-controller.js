import { DiasDaSemana } from '../enums/dias-da-semanas.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.Sabado = 6;
        this.Domingo = 0;
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacaotemp = Negociacao.ciaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtiu(negociacaotemp.data)) {
            this.mensagemView.update("Apenas negociaçoes em dias uteis sao aceitas");
            return;
        }
        this.negociacoes.adiciona(negociacaotemp);
        this.limparFormulario();
        this.atualizaView();
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }
    ehDiaUtiu(data) {
        return data.getDay() > DiasDaSemana.Domingo && data.getDay() < DiasDaSemana.Sabado;
    }
}
//# sourceMappingURL=negociacao-controller.js.map