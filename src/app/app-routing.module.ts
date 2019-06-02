import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import {ContactComponent} from './components/contact/contact.component';
import {TiendaComponent} from './components/tienda/tienda.component';
import {CocinaComponent} from './components/cocina/cocina.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'users/register', component: RegisterComponent},
  {path: 'users/login', component: LoginComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'cocina', component: CocinaComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
