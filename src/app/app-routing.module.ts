import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import {HamburguesasComponent} from './components/food/hamburguesas/hamburguesas.component';
import {PizzaComponent} from './components/food/pizzas/pizza.component';
import {EmpanadasComponent} from './components/food/empanadas/empanadas.component';
import {ContactComponent} from './components/contact/contact.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'users/register', component: RegisterComponent},
  {path: 'users/login', component: LoginComponent},
  {path: 'food/hamburguesas', component: HamburguesasComponent},
  {path: 'food/pizzas', component: PizzaComponent},
  {path: 'food/empanadas', component: EmpanadasComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
