import { CotacaoAtualComponent } from './pages/cotacao-atual/cotacao-atual.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { DetailComponent } from "./pages/detail/detail.component";
const routes: Routes = [
 {
 path: "",
 component: HomeComponent,
 pathMatch: "full"
 },
 {
 path: "detail/:albumId",
 component: DetailComponent
 },
 {
 path: "cotacoes",
 component: CotacaoAtualComponent
 },
 {
 path: "**",
 component: HomeComponent
 }
];
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule {}
