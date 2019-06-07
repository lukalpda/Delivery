import { NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
//PrimeNg
import {ButtonModule, OrderList} from 'primeng/primeng';
//Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//Components
import {ArticulosManufacturadosComponent} from './components/tienda/articulos-manufacturados/articulos-manufacturados.component';
import {OrdersListComponent} from './components/orders/orders-list/orders-list.component';
import {OrdersComponent} from './components/orders/orders.component';
import {MainMenuComponent} from './components/shared/main-menu/main-menu.component';
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/shared/search/search.component";
import { ContactComponent } from "./components/contact/contact.component";
import { DataViewComponent } from "./components/shared/data-view/data-view.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { RegisterComponent } from "./components/users/register/register.component";
import { LoginComponent } from "./components/users/login/login.component";
import { TiendaComponent } from "./components/tienda/tienda.component";
import { GerenteComponent } from "./components/gerente/gerente.component";
import {HomeAdminComponent} from './components/home-admin/home-admin.component';
import { MenuComponent } from "./components/shared/menu/menu.component";
import { RecepcionComponent } from './components/recepcion/recepcion.component';
//Firebase
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuth } from "@angular/fire/auth";
import {AngularFirestoreModule} from '@angular/fire/firestore';
//http
import { HttpClientModule } from "@angular/common/http";
import {environment} from '../environments/environment';
//chart.js
import { ChartsModule } from "ng2-charts";
import { BarrasComponent } from "./components/graficas/barras/barras.component";
import { LineasComponent } from "./components/graficas/lineas/lineas.component";
//Services
import {OrdersService} from './services/orders.service';
import { ManufacturadoService } from "./services/manufacturado.service";
import { ArticuloComponent } from './components/tienda/articulo/articulo.component';
import {DistritoService} from './services/distrito.service';
import {DomicilioService} from './services/domicilio.service';
import { ArticuloService } from './services/articulo.service';
import { CargosService } from './services/cargos.service';
import { ClienteService } from './services/cliente.service';
import { ComandaService } from './services/comanda.service';
import { DetalleRecetaService } from './services/detalle-receta.service';
import { DetalleVentaService } from './services/detalle-venta.service';
import { EmpleadoService } from './services/empleado.service';
import { FacturaService } from './services/factura.service';
import { LocalidadadService } from './services/localidad.service';
import { PedidoService } from './services/pedido.service';
import { UnidadMedidaService } from './services/unidad-medida.service';
import { PreciosService } from './services/precios.service';
import { CategoriaService } from './services/categoria.service';
//Material
import {MaterialModule} from './material.module';
import {CommonModule} from '@angular/common';



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
    OrdersComponent,
    OrdersListComponent,
    BarrasComponent,
    LineasComponent,
    MainMenuComponent,
    MenuComponent,
    BarrasComponent,
    ArticuloComponent,
    ArticulosManufacturadosComponent,
    RecepcionComponent
  ],
  imports: [
    MaterialModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ChartsModule,
    CommonModule,
    ReactiveFormsModule
  ],

  providers: [
    AngularFireAuth,
    ManufacturadoService,
    DomicilioService,
    CategoriaService,
    ArticuloService,
    CargosService,
    ClienteService,
    DetalleRecetaService,
    ComandaService,
    DetalleVentaService,
    DistritoService,
    EmpleadoService,
    FacturaService,
    LocalidadadService,
    PedidoService,
    PreciosService,
    UnidadMedidaService,
    OrdersService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
