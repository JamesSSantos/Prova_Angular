import { Component, EventEmitter, Output } from "@angular/core";
import { Binario } from "../binario.model";

@Component({
selector:'app-binario',
templateUrl: './binario.component.html',
styleUrls: ['./binario.component.css']
})

export class BinarioComponent{
    @Output() binarioAdicionado = new EventEmitter<Binario>();
    binario: number;
    resultado: number;

    constructor(){
        this.binario = 0;
        this.resultado = 0;
    }

    onAdicionarBinario(){
        const binario: Binario = {
            binario: this.binario,
            resultado: this.resultado,
        };
        this.binarioAdicionado.emit(binario);
    }
    onCalcularBinario() {
        var digit = parseInt(this.binario, 2);
    }
}