import { BrowserModule } from "@angular/platform-browser";
import { NgModule} from "@angular/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";

import { ButtonModule} from "primeng/primeng";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/shared/search/search.component";
import { ContactComponent } from "./components/contact/contact.component";
import { DataViewComponent } from "./components/shared/data-view/data-view.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { RegisterComponent } from "./components/users/register/register.component";
import { LoginComponent } from "./components/users/login/login.component";

import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireAuth } from "@angular/fire/auth";
import { TiendaComponent } from "./components/tienda/tienda.component";
import { GerenteComponent } from "./components/gerente/gerente.component";
import { MenuComponent } from "./components/shared/menu/menu.component";
import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule
} from "@angular/material";

//graficas chart.js
import { ChartsModule } from "ng2-charts";
import { BarrasComponent } from "./components/graficas/barras/barras.component";


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
import { StockComponent } from './components/stock/stock.component';
import { ArticulosManufacturadosComponent } from './components/tienda/articulos-manufacturados/articulos-manufacturados.component';


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
    MenuComponent,
    BarrasComponent,
    ArticuloComponent,
    ArticulosManufacturadosComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,    
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    ChartsModule
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
    UnidadMedidaService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
