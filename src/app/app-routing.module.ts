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
import {ComandaComponent} from "./components/cocina/comanda/comanda.component";
import {HistorialCocinaComponent} from "./components/cocina/historial-cocina/historial-cocina.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'auth/register', component: RegisterComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'tienda', component: TiendaComponent},

  //CanActive
  //Cliente
  {path: 'carro', component: CarroComponent},
    //canActivate: [guard], data: { expectedRol: ['admin','user','empleado']}},

  //admin
  {path: 'gerente', component: GerenteComponent},
  {path: 'recepcion', component: RecepcionComponent},
  {path: 'cocina', component: CocinaComponent},
  {path: 'comanda', component: ComandaComponent},
  {path: 'historial-cocina', component: HistorialCocinaComponent},
  {path: 'graficas/Platos+Vendidos', component: BarrasComponent},
  {path: 'graficas/Ingresos', component: LineasComponent},
  {path: 'graficas/dona-prime-ng', component: DonaPrimeNGComponent},
  {path: 'graficas/barras-prime-ng', component: BarrasPrimeNgComponent},
  {path: 'graficas/usuarios', component: UsuariosComponent},
  {path: 'clientes', component: ClientesComponent},
  /*{path: 'agregarCliente', component: AgregarClienteComponent,
    canActivate: [guard], data: { expectedRol: ['admin']}},*/
  {path: 'editarCliente/:id', component: EditarClienteComponent},
  {path: 'stock', component: StockComponent},
  {path: 'agregarArticulo', component: AgregarStockComponent},
  {path: 'editarStock/:id', component: EditarStockComponent},
  {path: 'platos', component: PlatoComponent},
  {path: 'agregarPlato', component: AgregarPlatoComponent},
  {path: 'editarPlato/:id', component: EditarPlatoComponent},
  {path: 'categoria_medida', component: CategoriaMedidaComponent},

  //Users
  {path: 'admin', component:AdminComponent},
   // canActivate: [guard], data: {expectedRol: ['admin']}},
  {path: 'user', component:UserComponent},
   // canActivate: [guard], data: {expectedRol: ['user']}},
  //ruta por defecto
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
