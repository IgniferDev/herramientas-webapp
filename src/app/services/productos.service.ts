import { Injectable } from '@angular/core';
import { ValidatorService } from './tools/validator.service';
import { ErrorsService } from './tools/errors.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private validatorService: ValidatorService,
    private errorService: ErrorsService,
  ) { }


public esquemaProduct(){
  return{
    'id':'',
    'nombre':'',
    'precio':'',
    'departamento':'',
  }
}

public validarProducto(data: any){
  console.log("validando--", data);
  let error: any = [];

  if(!this.validatorService.required(data["id"])){
    error["id"]=this.errorService.required;
  }
  
  if(!this.validatorService.required(data["nombre"])){
    error["nombre"]=this.errorService.required;
  }else if(!this.validatorService.max(data["nombre"],20)){
    error["nombre"] = this.errorService.max(20);
  }else if(!this.validatorService.min(data["nombre"], 3)){
    error["nombre"] = this.errorService.min(3);
    alert("Minimo 3 caracteres nombre");}

  if(!this.validatorService.required(data["precio"])){
    error["precio"]=this.errorService.required;
  }

  if(!this.validatorService.required(data["departamento"])){
    error["departamento"]=this.errorService.required;
  }else if(!this.validatorService.max(data["nombre"],20)){
    error["departamento"] = this.errorService.max(20);
  }else if(!this.validatorService.min(data["departamento"], 3)){
    error["departamento"] = this.errorService.min(3);
    alert("Minimo 3 caracteres departamento");}

  return error;
}

}

