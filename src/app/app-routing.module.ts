import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import {ContactComponent} from './components/contact/contact.component';
import {TiendaComponent} from './components/tienda/tienda.component';
import {GerenteComponent} from './components/gerente/gerente.component';
import {RecepcionComponent} from './components/recepcion/recepcion.component';
import {BarrasComponent} from './components/graficas/Platos+Vendidos/barras.component';
import {LineasComponent} from './components/graficas/PedidosPorPeriodo/lineas.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { AgregarClienteComponent } from './components/clientes/agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from './components/clientes/editar-cliente/editar-cliente.component';
import { CarroComponent } from './components/tienda/carro/carro.component';
import {EditarStockComponent} from './components/stock/stock-articulo/editar-articulo/editar-stock.component';
import {AgregarStockComponent} from './components/stock/stock-articulo/agregar-articulo/agregar-stock.component';
import {StockComponent} from './components/stock/stock-articulo/stock.component';
import {CocinaComponent} from './components/cocina/cocina.component';
import {DonaComponent} from './components/graficas/dona/dona.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'users/register', component: RegisterComponent},
  {path: 'users/login', component: LoginComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'gerente', component: GerenteComponent},
  {path: 'recepcion', component: RecepcionComponent},
  {path: 'graficas/Platos+Vendidos', component: BarrasComponent},
  {path: 'graficas/PedidosPorPeriodo', component: LineasComponent},
  {path: 'graficas/dona', component: DonaComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'agregarCliente', component: AgregarClienteComponent},
  {path: 'editarCliente/:id', component: EditarClienteComponent},
  {path: 'stock', component: StockComponent},
  {path: 'agregarArticulo', component: AgregarStockComponent},
  {path: 'editarStock/:id', component: EditarStockComponent},
  {path: 'carro', component: CarroComponent},
  {path: 'cocina', component: CocinaComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
