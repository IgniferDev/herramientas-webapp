import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
//importante anadir el location para el location.back
import { ActivatedRoute, Router } from '@angular/router';
import { MateriasService } from 'src/app/services/materias.service';
import { FacadeService } from 'src/app/services/facade.service';

declare var $:any; //SE DECLARA JQUERY

@Component({
  selector: 'app-materias-screen',
  templateUrl: './materias-screen.component.html',
  styleUrls: ['./materias-screen.component.scss'] 
})


export class MateriasScreenComponent implements OnInit {
  //AQUI VAN VARIABLES
  public editar:boolean = false;
  public materia: any = {};
  public errors:any={};
  public selectedValuecarrera: string ="";
  public selectedValuedia: String = "";
  public token : String =""; 
  public idMateria: number = 0; //variable para el boton de editar

  //PARA TIME PICKER DE COREUI
  time? = new Date();

  constructor(
    //servicios como materiasService 
    //o tambien router y dialog... checar componentes
    private facadeService: FacadeService,
    private router: Router,
    private location: Location,
    private materiasService: MateriasService, //se declara el servicio
    public activatedRoute: ActivatedRoute,//PARA EL EDITAR MATERIA



    
  ) { }

  ngOnInit():void{
    //lo primero que carga la pagina
    this.materia = this.materiasService.esquemaMateria();

    if(this.activatedRoute.snapshot.params['id'] != undefined){
      this.editar = true;
      //Asignamos a nuestra variable global el valor del ID que viene por la URL
      this.idMateria = this.activatedRoute.snapshot.params['id'];
      console.log("ID Materia: ", this.idMateria);
      //Al iniciar la vista obtiene el usuario por su ID
      this.obtenerMateriaByID();
    }

    //se manda a llamar el esquema del servicio a la variable
    this.token = this.facadeService.getSessionToken();
    if(this.token == ""){
      this.router.navigate([""]);
    } 
    

  }

  //de aqui pa abajo van funciones

  public regresar(){
    this.location.back();
  }

  public actualizar_materia(){
    //saberse la estructura de memoria los response flechas error llaves y parentesis
    //Validación
    this.errors = [];
    this.errors = this.materiasService.validarMateria(this.materia, this.editar);
    if(!$.isEmptyObject(this.errors)){
      return false;
    }
    console.log("Pasó la validación");
    this.materiasService.editarMateria(this.materia).subscribe(
      (response)=>{
        alert("Materia editada correctamente");
        console.log("Materia editada: ", response);
        //Si se editó, entonces mandar al home
        this.router.navigate(["tablamaterias"]);
      }, (error)=>{
        alert("No se pudo editar usuario");
      }
    );
  }

//INVOCACION AL SERVICIO
  public obtenerMateriaByID(){
    this.materiasService.getMateriaByID(this.idMateria).subscribe(
      (response)=>{
        this.materia = response;
        //Agregamos valores faltantes
        this.materia.horai = response.horai.split ("SS")[0];
        
        console.log("Datos materia: ", this.materia);
      }, (error)=>{
        alert("No se pudieron obtener los datos de la materia para editar");
      }
    );
  }

  public registrar_materia(){
    this.errors = [];

    this.errors = this.materiasService.validarMateria(this.materia, this.editar);
    if(!$.isEmptyObject(this.errors)){
      return false;
    }
      //FUNCION DE JQUERY PARA SABER SI UN ELEMENTO ESTA VACIO
      //cuando sean validados ya pasan la validacion
      this.materiasService.registrarMateria(this.materia).subscribe(
        (response)=>{
          alert("Materia Registrada Correctamente");
          console.log("Materia registrada: ", response);
          this.router.navigate(["home"]);
        },(error)=>{
          alert("No se pudo registrar materia");
          console.log(error);
        }
      );
      
    
    

    
  }
  programas = ['Ingenieria en Ciencias de la Computacion', 'Licenciatura en Ciencias de la Computacion', 'Ingenieria en Tecnologias de la Informacion']
   //created a basic simple json object to display

  dias =['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']

}
