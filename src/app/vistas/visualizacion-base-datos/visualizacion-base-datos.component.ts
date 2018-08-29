import { Usuarios } from './../../../assets/utils/lista-usuarios';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualizacion-base-datos',
  templateUrl: './visualizacion-base-datos.component.html',
  styleUrls: ['./visualizacion-base-datos.component.css']
})
export class VisualizacionBaseDatosComponent implements OnInit {

  usus = Usuarios;  

  constructor() { }
    
  ngOnInit() {
  }

}
