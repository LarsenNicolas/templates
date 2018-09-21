import { CommunicacionErrorService } from './communicacion-error.service';
import { Usuario } from './../model/usuario/usuario';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, RequestOptions, Jsonp } from "@angular/http";
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {
  resultado:string;
  url:string;
  estado:boolean=true;
  constructor(private http: Http, private communicacionError:CommunicacionErrorService) {}
  // sendToBack(object: any):Observable<Response>{
  // if(this.estado){
  //   let body = JSON.stringify(object);
  //   return this.http.post(this.url ,body).
  //   map(res => { this.communicacionError.notifyLoading(false); return res.json() }).
  //   catch((error: any) => Observable.throw(error.json()));
  // } ver esto para mandar a backend
}
