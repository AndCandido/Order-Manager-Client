import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { FreightCarriersComponent } from './pages/freight-carriers/freight-carriers.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { FreightCarrierRegisterFormComponent } from './components/freight-carrier/freight-carrier-register-form/freight-carrier-register-form.component';
import { FreightCarrierTableComponent } from './components/freight-carrier/freight-carrier-table/freight-carrier-table.component';

export const routes: Routes = [
    { path: "", redirectTo: "freight-carriers", pathMatch: "full" },
    { path: "products", component: ProductsComponent},
    { path: "orders", component: OrdersComponent},
    { path: "clients", component: ClientsComponent},
    {
      path: "freight-carriers",
      component: FreightCarriersComponent,
      children: [
        {
          path: "",
          component: FreightCarrierTableComponent
        },
        {
          path: "register",
          component: FreightCarrierRegisterFormComponent
        },
      ]
    },
];
