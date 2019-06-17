import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

//Bootstrap PrimeNg
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {ButtonModule} from 'primeng/primeng';
//Components
import {ArticulosManufacturadosComponent} from './components/tienda/articulos-manufacturados/articulos-manufacturados.component';
import {ListaPedidoComponent} from './components/pedidos/lista-pedido/lista-pedido.component';
import {MenuGerenteComponent} from './components/shared/menu-gerente/menu-gerente.component';
import {MenuRecepcionComponent} from './components/shared/menu-recepcion/menu-recepcion.component';
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/shared/search/search.component";
import { ContactComponent } from "./components/contact/contact.component";
import { DataViewComponent } from "./components/shared/data-view/data-view.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { RegisterComponent } from "./components/users/register/register.component";
import { LoginComponent } from "./components/users/login/login.component";
import { TiendaComponent } from "./components/tienda/tienda.component";
import { GerenteComponent } from "./components/gerente/gerente.component";
import {HomeAdminComponent} from './components/recepcion/home-admin/home-admin.component';
import { MenuComponent } from "./components/shared/menu/menu.component";
import { RecepcionComponent } from './components/recepcion/recepcion.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { AgregarClienteComponent } from './components/clientes/agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from './components/clientes/editar-cliente/editar-cliente.component';
import { CarroComponent } from './components/tienda/carro/carro.component';
import { StockComponent } from './components/stock/stock.component';
import { AgregarStockComponent } from './components/stock/agregar-articulo/agregar-stock.component';
import { EditarStockComponent } from './components/stock/editar-articulo/editar-stock.component';
import {PedidosComponent} from './components/pedidos/pedidos.component';
import { PlatoComponent } from './components/plato/plato.component';
import { AgregarPlatoComponent } from './components/plato/agregar-plato/agregar-plato.component';
import { EditarPlatoComponent } from './components/plato/editar-plato/editar-plato.component';
import {CocinaComponent} from './components/cocina/cocina.component';

//Firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
//http
import { HttpClientModule } from "@angular/common/http";
import { environment } from "../environments/environment";
//chart.js
import { ChartsModule } from "ng2-charts";
import { BarrasComponent } from "./components/graficas/barras/barras.component";
import { LineasComponent } from "./components/graficas/lineas/lineas.component";
//Services
import { OrdersService } from "./services/orders.service";
import { ManufacturadoService } from "./services/manufacturado.service";
import { ArticuloComponent } from "./components/tienda/articulo/articulo.component";
import { DistritoService } from "./services/distrito.service";
import { DomicilioService } from "./services/domicilio.service";
import { ArticuloService } from "./services/articulo.service";
import { CargosService } from "./services/cargos.service";
import { ClienteService } from "./services/cliente.service";
import { DetalleRecetaService } from "./services/detalle-receta.service";
import { DetalleVentaService } from "./services/detalle-venta.service";
import { EmpleadoService } from "./services/empleado.service";
import { FacturaService } from "./services/factura.service";
import { LocalidadadService } from "./services/localidad.service";
import { PedidoService } from "./services/pedido.service";
import { UnidadMedidaService } from "./services/unidad-medida.service";
import { CategoriaService } from "./services/categoria.service";

//Material
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./material.module";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ContactComponent,
    DataViewComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    TiendaComponent,
    GerenteComponent,
    HomeAdminComponent,
    PedidosComponent,
    ListaPedidoComponent,
    BarrasComponent,
    LineasComponent,
    MenuGerenteComponent,
    MenuRecepcionComponent,
    MenuComponent,
    ArticuloComponent,
    ArticulosManufacturadosComponent,
    RecepcionComponent,
    ClientesComponent,
    AgregarClienteComponent,
    EditarClienteComponent,
    CarroComponent,
    StockComponent,
    AgregarStockComponent,
    EditarStockComponent,
    PlatoComponent,
    AgregarPlatoComponent,
    EditarPlatoComponent,
    CocinaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ChartsModule,
    CommonModule,
    ReactiveFormsModule,
  ],

  providers: [
    AngularFireAuth,
    ManufacturadoService,
    DistritoService,
    DomicilioService,
    ArticuloService,
    CargosService,
    ClienteService,
    DetalleRecetaService,
    DetalleVentaService,
    DistritoService,
    DomicilioService,
    EmpleadoService,
    FacturaService,
    LocalidadadService,
    PedidoService,
    UnidadMedidaService,
    OrdersService,
    CategoriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
