import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthTokenService } from 'src/app/services/auth/auth-token.service';
import { OrderService } from 'src/app/services/order.service';
import { ProfileService } from 'src/app/services/profile.service';
import { OrderDTO } from 'src/app/shared/models/order-DTO.model';
import { User } from 'src/app/shared/models/user.model';
import { ToastrService } from 'ngx-toastr';

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
  public user: any;
  public isAdmin = false;
  public isUser = false;

  constructor(private route: ActivatedRoute, 
              private orderService: OrderService, 
              private router: Router,
              private authTokenService: AuthTokenService,
              private profileService: ProfileService,
              private toastr: ToastrService) {
  
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
    .subscribe(
      (data: any[]) => {
        this.user = data;
        if(this.user.role === "ADMIN"){
          this.isAdmin = true;
        }else if(this.user.role === "USER"){
          this.isUser = true;
        }
      }
    )
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
          this.toastr.error('Erro ao salvar o pedido!', error);
        }
      );
  }

  closeDialog() {
    this.showDialog = false;

    if(this.isAdmin){
      this.router.navigate(['/lista-pedidos']);
    }else if(this.isUser){
      this.router.navigate(['/meus-pedidos']);
    }

  }

}
