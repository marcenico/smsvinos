//#region MODULES
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { ArchwizardModule } from "angular-archwizard";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
//#endregion

//#region COMPONENTS
import { AppComponent } from "./app.component";
import { FooterComponent } from "./components/footer/footer.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { BodegaComponent } from "./components/bodega/bodega.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ViniedosComponent } from "./components/viniedos/viniedos.component";
import { NuestrosVinosComponent } from "./components/nuestros-vinos/nuestros-vinos.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { HomeComponent } from "./components/home/home.component";
import { MasterComponent } from "./components/master/master.component";
//#endregion

//#region OTHERS
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';
defineLocale('es', esLocale);
//#endregion

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    InicioComponent,
    BodegaComponent,
    NavbarComponent,
    ViniedosComponent,
    NuestrosVinosComponent,
    ContactoComponent,
    MasterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CollapseModule.forRoot(),
    ArchwizardModule,
    BsDatepickerModule.forRoot(),
    NgbTimepickerModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
