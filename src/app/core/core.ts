import { BackendServiceService } from './../service/backend-service.service';
import { Usuario } from './../model/usuario/usuario';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class Core{
    constructor(private backendService: BackendServiceService){}

    // gestionarUsuarios(
    //     name : string,
    //     psw : string,
    //     telefono: string,
    //     mail: string,
    //     fnac: string
    // ):Observable<Usuario>{
    //     let usu: Usuario= new Usuario();
    //     usu.name = name;
    //     usu.psw = psw;
    //     usu.telefono = telefono;
    //     usu.mail = mail;
    //     usu.fnac = fnac;
    //     return this.backendService.sendToBack(usu);
    // }
}