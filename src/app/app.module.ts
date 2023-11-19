import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Este import es para los servicios HTTP
import { HttpClientModule } from '@angular/common/http';
//Componentes
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraScreenComponent } from './screens/extra-screen/extra-screen.component';
//Angular material
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
//Cambia el idioma a español
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { RegistroProductoScreenComponent } from './screens/registro-producto-screen/registro-producto-screen.component';
import { NgxMaskModule,IConfig } from 'ngx-mask';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { EliminarUserModalComponent } from './modals/eliminar-user-modal/eliminar-user-modal.component';
import { MateriasScreenComponent } from './screens/materias-screen/materias-screen.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TablamateriasScreenComponent } from './screens/tablamaterias-screen/tablamaterias-screen.component';
import { EliminarMateriaModalComponent } from './modals/eliminar-materia-modal/eliminar-materia-modal.component';
//PARA EL RELOJ DE COREUI

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};


  
@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,ExtraScreenComponent,
    RegistroScreenComponent,
    HomeScreenComponent,
    RegistroProductoScreenComponent,
    EliminarUserModalComponent,
    MateriasScreenComponent,
    TablamateriasScreenComponent,
    EliminarMateriaModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,  
    MatIconModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    NgxMaskModule.forRoot(options),
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule, 
    NgxMaterialTimepickerModule,//PARA EL RELOJ SE HIZO npm install --save ngx-material-timepicker YT
    MatFormFieldModule, //PARA EL SEGUNDO RELOJ DEL INPUT EL DEL PROFE

  
    
  
    
    
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
