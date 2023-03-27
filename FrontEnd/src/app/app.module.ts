import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AcercaMiComponent } from './componentes/acerca-mi/acerca-mi.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { GraficosComponent } from './componentes/graficos/graficos.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FinalComponent } from './componentes/final/final.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CajaComponent } from './componentes/caja/caja.component';

import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './servicio/interceptor-service';
import { NueevaexpComponent } from './componentes/experiencia/nueevaexp/nueevaexp.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './componentes/estudios/neweducacion.component';
import { EditeducacionComponent } from './componentes/estudios/editeducacion.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AcercaMiComponent,
    EstudiosComponent,
    GraficosComponent,
    ExperienciaComponent,
    ProyectosComponent,
    FinalComponent,
    CajaComponent,

    LoginComponent,
     NueevaexpComponent,
     EditExperienciaComponent,
     NeweducacionComponent,
     EditeducacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
    
  ],
  providers: [
    interceptorProvider 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
