import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ProductosService } from 'src/app/services/productos.service';
declare var $:any;

@Component({
  selector: 'app-registro-producto-screen',
  templateUrl: './registro-producto-screen.component.html',
  styleUrls: ['./registro-producto-screen.component.scss']
})
export class RegistroProductoScreenComponent {
  //variables
  public editar:boolean = false;
  public product:any = {};

  public errors: any ={};


  constructor(
    private location: Location,
    private productosService: ProductosService
  ){  }

  ngOnInit():void {

    
    this.product = this.productosService.esquemaProduct();
    console.log("Producto", this.product);

  }

  public registrar(){
    this.errors= [];

    this.errors = this.productosService.validarProducto(this.product);
    if(!$.isEmptyObject(this.errors)){
      return false;
    }
    alert("Todo chido vamos a registrar producto");
    
  }

  public regresar(){
    this.location.back();
  }

  //funciones

}
