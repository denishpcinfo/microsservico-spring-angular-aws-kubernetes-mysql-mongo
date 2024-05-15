import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthTokenService } from 'src/app/services/auth/auth-token.service';
import { OrderService } from 'src/app/services/order.service';
import { ProfileService } from 'src/app/services/profile.service';
import { OrderDTO } from 'src/app/shared/models/orderDTO.model';
import { User } from 'src/app/shared/models/user.model';
import { TelefonePipe } from 'src/app/shared/pipes/telefone/telefone.pipe';
import { CpfPipe } from 'src/app/shared/pipes/cpf/cpf.pipe';

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
  public item: any;
  public user: User;

  constructor(private route: ActivatedRoute, 
              private orderService: OrderService, 
              private router: Router,
              private authTokenService: AuthTokenService,
              private profileService: ProfileService) {
  
    if(authTokenService.getToken != null){
      this.item = authTokenService.decodePayloadJWT();
    }              
  }
  
  ngOnInit() {
    const data = this.route.snapshot.queryParams['data'];
    this.getProfile();
    this.obj = JSON.parse(data);
    this.orderSummary = this.obj;
    this.total = 0;

    for(let orderPedido of this.orderSummary.foodItemsList){
      let totalPedido = (orderPedido.price * orderPedido.quantidadePedido);
      this.total = totalPedido + this.total;
    }

  }

  getProfile() {
    this.user = new User();
    this.profileService.getProfileId(this.item.sub)
    .subscribe({
      next: (data) => {
        this.user = data;
      }
    })
  }

  saveOrder() {
    this.orderSummary.user = this.user;
    this.orderSummary.valorTotal = this.total;

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
