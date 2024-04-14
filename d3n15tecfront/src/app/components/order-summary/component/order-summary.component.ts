import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { OrderDTO } from 'src/app/shared/models/orderDTO.model';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent {

  public orderSummary?: OrderDTO;
  public obj: any;
  public total?: any;
  public showDialog: boolean = false;

  constructor(private route: ActivatedRoute, 
              private orderService: OrderService, 
              private router: Router) { }
  
  ngOnInit() {
    const data = this.route.snapshot.queryParams['data'];

    this.obj = JSON.parse(data);
    this.obj.userId=1;
    this.orderSummary = this.obj;
    this.total = 0;

    for(let orderPedido of this.orderSummary.foodItemsList){
      let totalPedido = (orderPedido.price * orderPedido.quantidadePedido);
      this.total = totalPedido + this.total;
    }

  }

  saveOrder() {
    this.orderService.saveOrder(this.orderSummary)
      .subscribe(
        response => {
            this.showDialog = true;
        },
        error => {
          console.error('Falha ao salvar dados:', error);
        }
      );
  }

  closeDialog() {
    this.showDialog = false;
    this.router.navigate(['/']);
  }

}
