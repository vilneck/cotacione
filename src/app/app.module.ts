import { LocalStorageService } from './services/local-storage.service';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { DetailComponent } from "./pages/detail/detail.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./features/header/header.component";
import { AlbumListComponent } from "./features/album-list/album-list.component";
import { AlbumBoxComponent } from "./features/album-box/album-box.component";
import { UserInfoComponent } from "./features/user-info/user-info.component";
import { PhotoListComponent } from "./features/photo-list/photo-list.component";
import { PhotoViewComponent } from "./features/photo-view/photo-view.component";
import { SearchComponent } from "./features/search/search.component";
import { StorageServiceModule } from "ngx-webstorage-service";
// Angular Material
import { MatTableModule } from '@angular/material'  
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { CotacaoAtualComponent } from './pages/cotacao-atual/cotacao-atual.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    HeaderComponent,
    AlbumListComponent,
    AlbumBoxComponent,
    UserInfoComponent,
    PhotoListComponent,
    PhotoViewComponent,
    SearchComponent,
    FavoritosComponent,
    CotacaoAtualComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    StorageServiceModule
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent],
  entryComponents: [PhotoViewComponent]
})
export class AppModule {}