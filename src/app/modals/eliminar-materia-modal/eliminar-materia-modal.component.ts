import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MateriasService } from 'src/app/services/materias.service';


@Component({
  selector: 'app-eliminar-materia-modal',
  templateUrl: './eliminar-materia-modal.component.html',
  styleUrls: ['./eliminar-materia-modal.component.scss']
})
export class EliminarMateriaModalComponent {
  constructor(
    public materiasService: MateriasService,
    private dialogRef: MatDialogRef<EliminarMateriaModalComponent>,//SIEMPRE AGREGAR LOS SERVICIOS EN CONSTRUCTOR
    @Inject (MAT_DIALOG_DATA) public data: any//importante

  ) { }

  ngOnInit(): void {

  }

  public eliminarMateria(){
    this.materiasService.eliminarMateria(this.data.id).subscribe(
      (perro)=>{
        console.log(perro);
        this.dialogRef.close({isDelete:true});
      },(error)=>{
        console.log(error);
        
        
      }
    );

  }

  public cerrar_modal(){
    this.dialogRef.close({isDelete:false});
  }





  

}
