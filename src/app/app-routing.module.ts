import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { InicioComponent } from "./components/inicio/inicio.component";
import { CertificadosComponent } from "./components/certificados/certificados.component";
import { ProjetosComponent } from "./components/projetos/projetos.component";

const routes: Routes = [
    { path:'inicio', component: InicioComponent },
    { path:'certificados', component: CertificadosComponent },
    { path:'projetos', component: ProjetosComponent},
    { path:'',redirectTo: 'inicio', pathMatch:'full'}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{ }