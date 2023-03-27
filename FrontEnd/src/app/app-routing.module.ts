import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CajaComponent } from './componentes/caja/caja.component';
import { EditeducacionComponent } from './componentes/estudios/editeducacion.component';
import { NeweducacionComponent } from './componentes/estudios/neweducacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia/edit-experiencia.component';
import { NueevaexpComponent } from './componentes/experiencia/nueevaexp/nueevaexp.component';
import { LoginComponent } from './componentes/login/login.component';


const routes: Routes = [
  {path:'', component: CajaComponent},
  {path:'login', component: LoginComponent},
  { path: 'nuevaexp', component: NueevaexpComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NeweducacionComponent},
  { path: 'editedu/:id', component: EditeducacionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
