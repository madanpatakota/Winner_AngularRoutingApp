import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
                          { path:"" ,    component:HomeComponent},
                          { path:"home" ,    component:HomeComponent},
                          { path:"orders" ,    component:OrdersComponent},
                          { path:"order-details" ,    component:OrderDetailsComponent},
                          { path:"aboutus" , component:AboutusComponent},
                          { path:"**" , component:NotFoundComponent}
                          
                        ];

// http:localhost:4200/home   --path  -- homecomponennt
// http:localhost:4200/aboutus --address -- aboutuscomponent


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
