import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import {ContactComponent} from './components/contact/contact.component';
import {TiendaComponent} from './components/tienda/tienda.component';
import {GerenteComponent} from './components/gerente/gerente.component';
import {RecepcionComponent} from './components/recepcion/recepcion.component';
import {BarrasComponent} from './components/graficas/Platos+Vendidos/barras.component';
import {LineasComponent} from './components/graficas/Ingresos/lineas.component';
import { ClientesComponent } from './components/clientes/clientes.component';
//import { AgregarClienteComponent } from './components/clientes/agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from './components/clientes/editar-cliente/editar-cliente.component';
import { CarroComponent } from './components/tienda/carro/carro.component';
import {EditarStockComponent} from './components/stock/stock-articulo/editar-articulo/editar-stock.component';
import {AgregarStockComponent} from './components/stock/stock-articulo/agregar-articulo/agregar-stock.component';
import {StockComponent} from './components/stock/stock-articulo/stock.component';
import {CocinaComponent} from './components/cocina/cocina.component';
import {DonaPrimeNGComponent} from './components/graficas/dona-prime-ng/dona-prime-ng.component';
import {BarrasPrimeNgComponent} from './components/graficas/barras-prime-ng/barras-prime-ng.component';
import {UsuariosComponent} from './components/graficas/usuarios/usuarios.component';
import { GuardService as guard} from './services/complementos/guard.service';
import {AdminComponent} from './components/users/admin/admin.component';
import {UserComponent} from './components/users/user/user.component';
import { PlatoComponent } from './components/stock/stock-manufacturado/plato.component';
import { AgregarPlatoComponent } from './components/stock/stock-manufacturado/agregar-manufacturado/agregar-plato.component';
import { EditarPlatoComponent } from './components/stock/stock-manufacturado/editar-manufacturado/editar-plato.component';
import { CategoriaMedidaComponent } from './components/stock/categoria-medida/categoria-medida.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'auth/register', component: RegisterComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'tienda', component: TiendaComponent},

  //CanActive
  //Cliente
  {path: 'carro', component: CarroComponent,
    canActivate: [guard], data: { expectedRol: ['admin','user','empleado']}},

  //admin
  {path: 'gerente', component: GerenteComponent,
    canActivate: [guard], data: { expectedRol: ['admin']}},
  {path: 'recepcion', component: RecepcionComponent,
    canActivate: [guard], data: { expectedRol: ['admin']}},
  {path: 'cocina', component: CocinaComponent,
    canActivate: [guard], data: { expectedRol: ['admin']}},
  {path: 'graficas/Platos+Vendidos', component: BarrasComponent,
    canActivate: [guard], data: { expectedRol: ['admin']}},
  {path: 'graficas/Ingresos', component: LineasComponent,
    canActivate: [guard], data: { expectedRol: ['admin']}},
  {path: 'graficas/dona-prime-ng', component: DonaPrimeNGComponent,
    canActivate: [guard], data: { expectedRol: ['admin']}},
  {path: 'graficas/barras-prime-ng', component: BarrasPrimeNgComponent,
    canActivate: [guard], data: { expectedRol: ['admin']}},
  {path: 'graficas/usuarios', component: UsuariosComponent,
    canActivate: [guard], data: { expectedRol: ['admin']}},
  {path: 'clientes', component: ClientesComponent,
    canActivate: [guard], data: { expectedRol: ['admin']}},
  /*{path: 'agregarCliente', component: AgregarClienteComponent,
    canActivate: [guard], data: { expectedRol: ['admin']}},*/
  {path: 'editarCliente/:id', component: EditarClienteComponent,
    canActivate: [guard], data: { expectedRol: ['admin']}},
  {path: 'stock', component: StockComponent,
    canActivate: [guard], data: { expectedRol: ['admin']}},
  {path: 'agregarArticulo', component: AgregarStockComponent,
    canActivate: [guard], data: { expectedRol: ['admin']}},
  {path: 'editarStock/:id', component: EditarStockComponent,
    canActivate: [guard], data: { expectedRol: ['admin']}},
  {path: 'platos', component: PlatoComponent,
    canActivate: [guard], data: { expectedRol: ['admin']}},
  {path: 'agregarPlato', component: AgregarPlatoComponent,
  canActivate: [guard], data: { expectedRol: ['admin']}},
  {path: 'editarPlato/:id', component: EditarPlatoComponent,
    canActivate: [guard], data: { expectedRol: ['admin']}},
  {path: 'categoria_medida', component: CategoriaMedidaComponent,
    canActivate: [guard], data: { expectedRol: ['admin']}},

  //Users
  {path: 'admin', component:AdminComponent,
    canActivate: [guard], data: {expectedRol: ['admin']}},
  {path: 'user', component:UserComponent,
    canActivate: [guard], data: {expectedRol: ['user']}},
  //ruta por defecto
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
