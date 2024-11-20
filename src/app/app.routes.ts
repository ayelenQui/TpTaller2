import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';


import { CrearListaComponent } from './crearLista/crearLista.component';
import { HomeComponent } from './home/home.component';
import {ListarComponent} from './listar/listar.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Ruta principal
  { path: 'crearLista', component: CrearListaComponent },
  { path: 'listar', component: ListarComponent },
  // Ruta para crear tarea
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutes{

}
