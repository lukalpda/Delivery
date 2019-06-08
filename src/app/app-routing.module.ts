import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import {ContactComponent} from './components/contact/contact.component';
import {TiendaComponent} from './components/tienda/tienda.component';
import {GerenteComponent} from './components/gerente/gerente.component';
import {RecepcionComponent} from './components/recepcion/recepcion.component';
import {BarrasComponent} from './components/graficas/barras/barras.component';
import {LineasComponent} from './components/graficas/lineas/lineas.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { AgregarClienteComponent } from './components/clientes/agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from './components/clientes/editar-cliente/editar-cliente.component';
import { CarroComponent } from './components/carro/carro.component';
import {OrdersListComponent} from './components/orders/orders-list/orders-list.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'users/register', component: RegisterComponent},
  {path: 'users/login', component: LoginComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'gerente', component: GerenteComponent},
  {path: 'recepcion', component: RecepcionComponent},
  {path: 'orders-list', component: OrdersListComponent},
  {path: 'graficas/barras', component: BarrasComponent},
  {path: 'graficas/lineas', component: LineasComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'agregarCliente', component: AgregarClienteComponent},
  {path: 'editarCliente/:id', component: EditarClienteComponent},
  {path: 'carro', component: CarroComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
