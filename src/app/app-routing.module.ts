import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { ExtraScreenComponent } from './screens/extra-screen/extra-screen.component';
import { RegistroProductoScreenComponent } from './screens/registro-producto-screen/registro-producto-screen.component';
import { MateriasScreenComponent } from './screens/materias-screen/materias-screen.component';
import { TablamateriasScreenComponent } from './screens/tablamaterias-screen/tablamaterias-screen.component';

const routes: Routes = [
  //Aquí se agregan cada una de las rutas del proyecto
  { path: '', component: LoginScreenComponent, pathMatch: 'full' },
  { path: 'registro', component: RegistroScreenComponent, pathMatch: 'full' },
  { path: 'registro/:id', component: RegistroScreenComponent, pathMatch: 'full' },
  { path: 'home', component: HomeScreenComponent, pathMatch: 'full' },
  { path: 'extra', component: ExtraScreenComponent, pathMatch: 'full'},
  { path: 'registro-producto', component: RegistroProductoScreenComponent, pathMatch: 'full'},
  { path: 'materias', component: MateriasScreenComponent, pathMatch: 'full'},
  { path: 'materias/:id', component: MateriasScreenComponent, pathMatch: 'full'},
  { path: 'tablamaterias', component: TablamateriasScreenComponent, pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
