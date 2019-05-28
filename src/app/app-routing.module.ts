import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import {HamburguesasComponent} from './components/tienda/hamburguesas/hamburguesas.component';
import {PizzaComponent} from './components/tienda/pizzas/pizza.component';
import {EmpanadasComponent} from './components/tienda/empanadas/empanadas.component';
import {ContactComponent} from './components/contact/contact.component';
import {TiendaComponent} from './components/tienda/tienda.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'users/register', component: RegisterComponent},
  {path: 'users/login', component: LoginComponent},
  {path: 'tienda/hamburguesas', component: HamburguesasComponent},
  {path: 'tienda/pizzas', component: PizzaComponent},
  {path: 'tienda/empanadas', component: EmpanadasComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
