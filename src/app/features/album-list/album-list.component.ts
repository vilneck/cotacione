import { Symbol } from './../../services/cotacao.service';
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-album-list",
  templateUrl: "./album-list.component.html",
  styles: []
})
export class AlbumListComponent {
  @Input() symbols: Symbol[];
}