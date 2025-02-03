import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { FreightCarriersComponent } from './pages/freight-carriers/freight-carriers.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ClientsComponent } from './pages/clients/clients.component';

export const routes: Routes = [
    { path: "", component: HomeComponent},
    { path: "products", component: ProductsComponent},
    { path: "orders", component: OrdersComponent},
    { path: "clients", component: ClientsComponent},
    { path: "freight-carriers", component: FreightCarriersComponent},
];
