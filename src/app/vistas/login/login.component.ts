import { UsuariosService } from './../../service/usuarios.service';
import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  loginText = 'Login';
  signUpText = 'Sign Up'; 
  lessons = ['Lesson 1', 'Lessons 2'];

  login() {
      console.log('Login');
  }

  signUp() {
      console.log('Sign Up');
  }

  flag: boolean = true;
  
  constructor(private fb : FormBuilder, 
              private usuarioService : UsuariosService) {}
  
  ngOnInit(){
    
  }

  logForm = this.fb.group({
    usuario: ['', Validators.required ],
    psw: ['']
  });

  newUsuario(){
    this.flag = false
  }

  datosLogin(){
    console.log(this.logForm.value);
  }

  get usuario(){
    return this.logForm.get('usuario').value;
  }
  
  get psw(){
    return this.logForm.get('psw').value;
  }
}
