import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarComponent } from './componentes/agregar/agregar.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { ListarComponent } from './componentes/listar/listar.component';

const routes: Routes = [

  //{path: '',pathMatch:'full',redirectTo:'listar'},
  {path: 'agregar',component:AgregarComponent},
  {path: 'editar/:id',component:EditarComponent},
  {path: 'listar',component:ListarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
