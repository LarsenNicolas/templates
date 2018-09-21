import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  
  private usuarioUrl = 'vistas/login';

  constructor(private http: HttpClient) { }
  
  get usuarios (): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.usuarioUrl)
  }

}
