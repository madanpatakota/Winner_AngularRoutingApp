import { Component , OnInit } from '@angular/core';
import { OrderService } from '../orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {
  

  //Page-lifecycle hook


  constructor(public orderService:OrderService){

  }


  // [
  //   {
  //       id: 1, name: 'IPhone'
  //   },
  //   { id: 2, name: 'Samsung'
        
  //   },
  //   {
  //       id: 3, name: 'Microsoft'
  //   }]

  GetOrders:any[] = [];
  ngOnInit(): void {
     this.GetOrders = this.orderService.getOrders();
  }





}
