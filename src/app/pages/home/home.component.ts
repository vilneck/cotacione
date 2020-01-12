import { CotacoesService } from './../../services/cotacao.service';
import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';

export interface Favorite {
  symbol: string;
  price: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  favorites: Favorite[] = [];
  filteredFavorites: Favorite[] = this.favorites;
  filter: String = "";
  displayedColumns: string[] = ['symbol', 'price'];

  constructor(private localStorageService: LocalStorageService,private cotacoesService: CotacoesService) {}
 
 async ngOnInit() { 
  this.favorites = this.localStorageService.getAll(); 
  this.favorites.forEach(async element =>{
    
    let price = await this.cotacoesService.getSymbol(element.symbol);
    element.price = price.price;
  })
  this.filteredFavorites = this.favorites;
  }
  aplicarFiltros(word: string) {
    this.filteredFavorites = this.favorites.filter(symbol =>
      symbol.symbol.includes(word.toUpperCase())
  );
  }
}
