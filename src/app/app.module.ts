import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { CertificadosComponent } from './components/certificados/certificados.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ProjetosComponent,
    CertificadosComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
