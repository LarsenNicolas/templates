import { Usuarios } from './../../../assets/utils/lista-usuarios';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario/usuario';

@Component({
  selector: 'app-visualizacion-base-datos',
  templateUrl: './visualizacion-base-datos.component.html',
  styleUrls: ['./visualizacion-base-datos.component.css']
})
export class VisualizacionBaseDatosComponent implements OnInit {

  usus = Usuarios;  

  selectedUsu: Usuario;

  constructor() { }
    
  ngOnInit() {
  
  }
  onSelected(usu: Usuario){
    this.selectedUsu=usu;
  }

}
