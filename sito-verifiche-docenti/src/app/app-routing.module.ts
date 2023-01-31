import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocentiComponent } from './docenti/docenti.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistratiComponent } from './registrati/registrati.component';
import { VerificheComponent } from './verifiche/verifiche.component';

// Vengono definiti i percorsi dei diversi componenti
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registrati', component: RegistratiComponent },
  { path: 'docenti', component: DocentiComponent },
  { path: 'home', component: HomeComponent },
  { path: 'verifiche', component: VerificheComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
