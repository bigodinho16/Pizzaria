import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 { path:'cadastro', component: CadastroComponent},
 { path: 'login', component: LoginComponent},
 { path: 'home', component: HomeComponent}

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
