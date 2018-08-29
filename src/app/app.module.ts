import { NavmacComponent } from './components/navmac/navmac.component';
import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './vistas/principal/principal.component';
import { LoginComponent } from './vistas/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './vistas/navbar/navbar.component';
import { GaleriaComponent } from './vistas/galeria/galeria.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisualizacionBaseDatosComponent } from './vistas/visualizacion-base-datos/visualizacion-base-datos.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginComponent,
    NavbarComponent,
    NavmacComponent,
    GaleriaComponent,
    VisualizacionBaseDatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
