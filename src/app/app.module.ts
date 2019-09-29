import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/footer/footer.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { BodegaComponent } from "./components/bodega/bodega.component";
import { navbarComponent } from "./components/navbar/navbar.component";
import { ViniedosComponent } from "./components/viniedos/viniedos.component";
import { NuestrosVinosComponent } from "./components/nuestros-vinos/nuestros-vinos.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { HomeComponent } from "./components/home/home.component";
import { MasterComponent } from "./components/master/master.component";
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    InicioComponent,
    BodegaComponent,
    navbarComponent,
    ViniedosComponent,
    NuestrosVinosComponent,
    ContactoComponent,
    MasterComponent,
    HomeComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
