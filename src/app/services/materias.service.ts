import { Injectable } from '@angular/core';
import { ValidatorService } from './tools/validator.service';
import { ErrorsService } from './tools/errors.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FacadeService } from './facade.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  constructor(
    private validatorService: ValidatorService,
    private errorService: ErrorsService,
    private http: HttpClient,
    private facadeService: FacadeService,

  ) { }

  public esquemaMateria(){
    return {
      'nrc': '',
      'nombre_materia': '',
      'seccion': '',
      'dias': '',
      'horai': '',
      'horaf': '',
      'salon': '',
      'carrera': '',
    }
  }

  //funcion para validar datos de materia
  public validarMateria(data:any, editar:boolean){//como es un json se usa any
    console.log("validando materia", data);
    let error: any=[]; 

//el required suelta el "CAMPO REQUERIDO"
    if(!this.validatorService.required(data["nrc"])){
      error["nrc"] = this.errorService.required; 
    }

    if(!this.validatorService.required(data["nombre_materia"])){
      error["nombre_materia"] = this.errorService.required; 
    }

    if(!this.validatorService.required(data["seccion"])){
      error["seccion"] = this.errorService.required; 
    }

    if(!this.validatorService.required(data["dias"])){
      error["dias"] = this.errorService.required; 
    }

    if(!this.validatorService.required(data["horai"])){
      error["horai"] = this.errorService.required; 
    }

    if(!this.validatorService.required(data["horaf"])){
      error["horaf"] = this.errorService.required; 
    }

    if(!this.validatorService.required(data["salon"])){
      error["salon"] = this.errorService.required; 
    }

    if(!this.validatorService.required(data["carrera"])){
      error["carrera"] = this.errorService.required; 
    }

    return error;
    
  }

  //AGREGAR SERVICIOS HTTP
  //REGISTRAR MATERIA
  public registrarMateria(data:any): Observable <any>{
    return this.http.post<any>(`${environment.url_api}/materias/`, data, httpOptions);
  }

  public obtenerListaMaterias (): Observable <any>{
    var token = this.facadeService.getSessionToken();
    var headers = new HttpHeaders({'Content-Type': 'application/json' , 'Authorization': 'Bearer '+token})
    return this.http.get<any>(`${environment.url_api}/lista-materias/`, {headers:headers});
  }

  public getMateriaByID(idMateria: number){
    return this.http.get<any>(`${environment.url_api}/materias/?id=${idMateria}`,httpOptions);
  }

  public editarMateria (data: any): Observable <any>{
    var token = this.facadeService.getSessionToken();
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+token});
    return this.http.put<any>(`${environment.url_api}/materias-edit/`, data, {headers:headers});
  }

  public eliminarMateria (idMateria: number): Observable <any>{
    var token = this.facadeService.getSessionToken();
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' , 'Authorization': 'Bearer '+token});
    return this.http.delete<any>(`${environment.url_api}/materias-edit/?id=${idMateria}`,{headers:headers});
  }


}
