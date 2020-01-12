
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
 providedIn: "root"
})
export class CotacoesService {

 private url: string = "https://financialmodelingprep.com/api/v3";
 constructor(private http: HttpClient) {}

 getPrices = () => this.http.get<Consulta>(`${this.url}/company/stock/list`).toPromise();
 getSymbol = symbolId => this.http.get<PrecoAtual>(`${this.url}/stock/real-time-price/${symbolId}`).toPromise();

 /*async getSymbol(symbolId)
 {   
     console.log(symbolId)
    let retorno = await this.http.get<Symbol>(`${this.url}/stock/real-time-price/${symbolId}`).toPromise();
    console.log(retorno)
    return retorno;
 }*/
 /*
 getPrices()
 { 
     let retorno = this.http.get<[]>(`https://api.ratesapi.io/api/latest`).toPromise();
     console.log(retorno)
     return retorno;
 } 
 getAlbums = () => this.http.get<Album[]>(`${this._url}/albums`).toPromise();
 getAlbum = albumId =>
 this.http.get<Album>(`${this._url}/albums?id=${albumId}`).toPromise();
 getUser = userId =>
 this.http.get<User>(`${this._url}/users?id=${userId}`).toPromise();
 getAlbumPhotos = albumId =>
 this.http
 .get<Photo[]>(`${this._url}/photos?albumId=${albumId}`)
 .toPromise();
 */
}
export class Consulta
{
    symbolsList:Symbol[];
}

export class Symbol
{
    symbol:string;
    name:string;
    price:number;
}

export class PrecoAtual
{
    symbol:string;
    price:number;
}