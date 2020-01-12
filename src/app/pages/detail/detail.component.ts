import { LocalStorageService } from './../../services/local-storage.service';
import { Symbol } from 'src/app/services/cotacao.service';
import { CotacoesService, PrecoAtual } from './../../services/cotacao.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
 selector: "app-detail",
 templateUrl: "./detail.component.html",
 styleUrls: ["./detail.component.scss"]
})
export class DetailComponent implements OnInit {

    symbolId: string;
    precoAtual: PrecoAtual;
    icone:string = 'star_border';
    textoBotao:string = 'Favoritar';
    isChecked:boolean = false;

 constructor(
 private route: ActivatedRoute,
 private cotacoesService: CotacoesService,
 private localStorageService: LocalStorageService
 ) {}
 ngOnInit() {
    this.precoAtual = new PrecoAtual
    this.precoAtual.price = 0;


    this.symbolId = this.route.snapshot.params.albumId; 
    this.getData(this.symbolId);
 }
 favoritar()
 {
   this.icone = (this.icone=='star')?'star_border':'star';
   this.textoBotao = (this.icone=='star')?'Desfavoritar':'Favoritar';
   this.isChecked = (this.icone=='star')?true:false;
   this.localStorageService.store(this.symbolId,this.isChecked);
 }
 getData = async symbolId => 
 {
 this.precoAtual = (await this.cotacoesService.getSymbol(symbolId));
 let data = this.localStorageService.get(this.symbolId)
 
 if(data)
 {
    
    this.isChecked = data.checked;
    this.icone = (this.isChecked)?'star':'star_border';
    this.textoBotao = (this.isChecked)?'Desfavoritar':'Favoritar';
 }
 };


}
