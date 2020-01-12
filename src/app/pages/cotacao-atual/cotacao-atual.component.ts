import { Symbol,CotacoesService } from './../../services/cotacao.service';
import { Component, OnInit } from "@angular/core";
@Component({
 selector: "app-cotacao-atual",
 templateUrl: "./cotacao-atual.component.html",
 styleUrls: ["./cotacao-atual.component.scss"]
})



export class CotacaoAtualComponent implements OnInit {
 symbols: Symbol[] = [];
 filteredSymbols: Symbol[] = this.symbols;
 filter: String = "";
 constructor(private cotacoesService:CotacoesService) {}

async ngOnInit() {

    this.cotacoesService.getPrices().then(res => {      
        this.symbols = res.symbolsList;
        this.filteredSymbols = this.symbols;
        });
        this.filteredSymbols = this.symbols;
 }
filterSymbols = (word: string) => {
    this.filteredSymbols = this.symbols.filter(symbol =>
        symbol.name.includes(word)
    );
};
}
