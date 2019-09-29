import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from "./components/inicio/inicio.component";
import { BodegaComponent } from "./components/bodega/bodega.component";
import { ViniedosComponent } from "./components/viniedos/viniedos.component";
import { NuestrosViniedosComponent } from "./components/nuestros-viniedos/nuestros-viniedos.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { MasterComponent } from "./components/master/master.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "inicio" },
  { path: "inicio", component: InicioComponent },
  {
    path: "",
    component: MasterComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "bodega", component: BodegaComponent },
      { path: "viniedos", component: ViniedosComponent },
      { path: "nuestrosViñedos", component: NuestrosViniedosComponent },
      { path: "contacto", component: ContactoComponent }
    ]
  },
  { path: "**", pathMatch: "full", redirectTo: "inicio" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
