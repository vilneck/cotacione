import { Component, Input } from "@angular/core";
import { Symbol } from 'src/app/services/cotacao.service';

@Component({
 selector: "app-album-box",
 templateUrl: "./album-box.component.html",
 styleUrls: ["./album-box.component.scss"]
})
export class AlbumBoxComponent {
 @Input() symbol: Symbol;
}