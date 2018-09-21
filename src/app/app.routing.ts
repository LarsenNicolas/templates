import { VisualizacionBaseDatosComponent } from './vistas/visualizacion-base-datos/visualizacion-base-datos.component';
import { GaleriaComponent } from './vistas/galeria/galeria.component';
import { LoginComponent } from './vistas/login/login.component';
import { PrincipalComponent } from './vistas/principal/principal.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



export const routes: Routes = [
    { path: '',   redirectTo: 'vistas/miBase', pathMatch: 'full' },
    { path: 'vistas/login', component: LoginComponent},
    { path: 'principal', component: PrincipalComponent },
    { path: 'vistas/galeria', component: GaleriaComponent},
    { path: 'vistas/miBase', component: VisualizacionBaseDatosComponent}  
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }