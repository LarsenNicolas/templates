import { Core } from './core/core';
import { UsuariosService } from './service/usuarios.service';
import { NavmacComponent } from './components/navmac/navmac.component';
import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './vistas/principal/principal.component';
import { LoginComponent } from './vistas/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './vistas/navbar/navbar.component';
import { GaleriaComponent } from './vistas/galeria/galeria.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VisualizacionBaseDatosComponent } from './vistas/visualizacion-base-datos/visualizacion-base-datos.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AbmGastosComponent } from './vistas/abm-gastos/abm-gastos.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  declarations: [
    BrowserAnimationsModule,
    AppComponent,
    PrincipalComponent,
    LoginComponent,
    NavbarComponent,
    NavmacComponent,
    GaleriaComponent,
    VisualizacionBaseDatosComponent,
    AbmGastosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [UsuariosService,
              Core],
  bootstrap: [AppComponent]
})
export class AppModule { }
