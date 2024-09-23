import { Injectable } from "@angular/core"

@Injectable()
export class OrderService {


    getOrders() {
        return [
            {
                id: 1, name: 'IPhone'
            },
            { id: 2, name: 'Samsung'
                
            },
            {
                id: 3, name: 'Microsoft'
            }]
    }


    getOrdersDetails() {
        return [
            {
                id: 1, name: 'IPhone', details: "This is Iphone and Price is 200000"
            },
            {
                id: 2, name: 'Samsung', details: "This is Iphone and Price is 100000"

            },
            {
                id: 3, name: 'Microsoft', details: "This is Iphone and Price is 150000"
            }]
    }


}