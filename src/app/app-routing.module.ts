import { DatosComponent } from './datos/datos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NuevoUsrComponent } from './nuevo-usr/nuevo-usr.component';


const routes: Routes = [
  { path: 'Login', component: LoginComponent},
  { path: 'CrearUsuario', component: NuevoUsrComponent},
  { path: 'Datos', component: DatosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
