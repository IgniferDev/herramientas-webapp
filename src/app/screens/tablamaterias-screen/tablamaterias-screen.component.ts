import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
//importante anadir el location para el location.back
import { Router } from '@angular/router';
import { FacadeService } from 'src/app/services/facade.service';
import { MateriasService } from 'src/app/services/materias.service';
import { EliminarMateriaModalComponent } from 'src/app/modals/eliminar-materia-modal/eliminar-materia-modal.component';

@Component({
  selector: 'app-tablamaterias-screen',
  templateUrl: './tablamaterias-screen.component.html',
  styleUrls: ['./tablamaterias-screen.component.scss']
})
export class TablamateriasScreenComponent implements OnInit{
  //variables
  public token : string ="";
  public lista_materias: any[] = [];

  displayedColumns: string[] = ['nrc', 'nombre_materia', 'seccion', 'dias', 'horai','horaf', 'salon', 'carrera', 'editar', 'eliminar'];
  dataSource = new MatTableDataSource<DatosMateria>(this.lista_materias as DatosMateria[]); //pasarle objeto a la tabla lista de materias

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    private facadeService: FacadeService,
    private materiasService: MateriasService,
    private router: Router,
    public dialog: MatDialog,



  ) { }

  ngOnInit(): void {
    //lo primero que carga la pagina
    //VALIDAR INICIO DE SESION OBTIENE LOGIN para que no entren SIN INICIAR SESION
    this.token = this.facadeService.getSessionToken();
    if(this.token == ""){
      this.router.navigate([""]);
    } 
    //manda a ejecutar a la funcion
    this.obtenerMaterias();

    this.initPaginator();
    
  }

  //FUNCIONES
  public goHome(){
    this.router.navigate(["home"]);
  }


  public goEditar(idMateria: number){
    this.router.navigate(["materias/"+idMateria]);
  }

  public delete(idMateria: number){
    console.log("materia :D:", idMateria);
    const dialogRef = this.dialog.open(EliminarMateriaModalComponent,{
      data: {id: idMateria}, //Se pasan valores a través del componente
      height: '268px',
      width: '328px',
    });
    dialogRef.afterClosed().subscribe(perro => {//estructura general tipo peticion, result es nombre de variable puede ser ualquiera
      if(perro.isDelete){
        console.log("Usuario eliminado");
        //Recargar página
        window.location.reload();
      }else{
        alert("Usuario no eliminado ");
        console.log("No se eliminó el usuario");
        //alert("No se eliminó el usuario");
      }
    });
  }


  public obtenerMaterias(){
    this.materiasService.obtenerListaMaterias().subscribe(
      (response)=>{
        this.lista_materias = response;
        console.log("lista materias: ", this.lista_materias);
        if(this.lista_materias.length>0){
          this.dataSource = new MatTableDataSource<DatosMateria>(this.lista_materias as DatosMateria[]);
        }
      }, (error)=>{
        alert("No se pudo obtener lista de Materias");
      }
    );

  }

  //Para paginacion
  //Paginador para Agentes
  public initPaginator(){
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      //console.log("Paginator: ", this.dataSourceIngresos.paginator);
      //Modificar etiquetas del paginador a español
      this.paginator._intl.itemsPerPageLabel = 'Registros por página';
      this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
        if (length === 0 || pageSize === 0) {
          return `0 / ${length}`;
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return `${startIndex + 1} - ${endIndex} de ${length}`;
      };
      this.paginator._intl.firstPageLabel = 'Primera página';
      this.paginator._intl.lastPageLabel = 'Última página';
      this.paginator._intl.previousPageLabel = 'Página anterior';
      this.paginator._intl.nextPageLabel = 'Página siguiente';
    },500);
    //this.dataSourceIngresos.paginator = this.paginator;
  }

}//CIERRA CLASE PRINCIPAL

//INTERFAZ VA HASTA EL FINAL

export interface DatosMateria {
  nrc: string,
  nombre_materia: string,
  seccion: string,
  dias: string,
  horai: string,
  horaf: string,
  salon: string,
  carrera: string

}