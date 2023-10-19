import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacadeService } from 'src/app/services/facade.service';
declare var $:any;
@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {
  //Aquí se definen las variables
  public type: String = "password";
  public username: String = "";
  public password: String = "";

  public errors:any = {};

  public users_registrados: any = [];
  public logeo: boolean = false;
  public flag_pwd: boolean = false;
  public flag_email: boolean = false;
  
  constructor(
    private router: Router,
    public facadeService: FacadeService
  ) { }

  ngOnInit(): void {
    this.llenadoUsuarios();
  }

  public llenadoUsuarios() {
    this.users_registrados = [
      {
      'matricula': '202234180',
      'first_name': 'Fernando',
      'last_name': 'Morales',
      'email': 'a@gmail.com',
      'password': 'rock2213',
      'confirmar_password': 'rock2213',
      'fecha_nacimiento': '2004-01-01',
      'curp': 'MESL951007HVZNNS01',
      'rfc': 'MESL951007S73',
      'edad': '17',
      'telefono': '2225220150',
      'ocupacion': 'Estudiante',
      },
      {
        'matricula': '123456789',
      'first_name': 'Alfredo',
      'last_name': 'Herrera Mora',
      'email': 'alfredo@gmail.com',
      'password': 'rock2213',
      'confirmar_password': 'rock2213',
      'fecha_nacimiento': '2000-01-01',
      'curp': 'MESL951007HVZNNS01',
      'rfc': 'MESL951007S73',
      'edad': '20',
      'telefono': '2225220150',
      'ocupacion': 'Administrador',
      }
    ];
    console.log("Usuario es: ", this.users_registrados);
    
    
  }

  public login(){
    //Validar
    this.errors = [];

    this.errors = this.facadeService.validarLogin(this.username, this.password);
    if(!$.isEmptyObject(this.errors)){
      return false;
    }
    console.log("paso validacion");
    
    //Si pasa la validación
    
    this.buscarUser(this.username, this.password);

    if(this.logeo){
      //alert("Usuario Encontrado");
      this.router.navigate(["home"]);
    }else{
      alert("Usuario y contraseña incorrectos");
    }

  }

  public buscarUser(username: String, pwd: String){
    //Tendria que logearse

    this.users_registrados.forEach(user => {
      if(user.email == username){
        if(user.password== pwd){
          this.logeo=true;
        }
        else{
          this.flag_pwd=true;
          //Si esta mal la contraseña
        }
      }
      else{
        this.flag_email=true;
        //Si esta mal el correo
      }
    });
  }


  public showPassword(){
    if(this.type == "password"){
      this.type = "text";
    }else{
      this.type = "password";
    }
  }

  public goRegistro(){
    this.router.navigate(["registro"]);
  }

  public goProducto(){
    this.router.navigate(["registro-producto"])
  }

  public goLogin(){
    this.router.navigate(["extra"])
  }

}//Fin clase
