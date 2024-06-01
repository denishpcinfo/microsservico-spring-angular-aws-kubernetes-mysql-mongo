import { Component, ViewChild, OnInit } from '@angular/core';
import { AuthTokenService } from 'src/app/services/auth/auth-token.service';
import { OrderService } from 'src/app/services/order.service';
import { PedidoEditar } from 'src/app/shared/models/pedido-editar.model';
import { Restaurant } from 'src/app/shared/models/restaurant.model';
import { User } from 'src/app/shared/models/user.model';
import { CpfPipe } from 'src/app/shared/pipes/cpf/cpf.pipe';


@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  @ViewChild("editarPedidoModal", { static: false })
  editarPedidoModal: any;

  public item: any;
  public pedidoEdit = new PedidoEditar();
  public restaurante = new Restaurant() ;
  public confirmPassword: any;
  public usuario = new User();
  public items = ["Pedido realizado",
                  "Preparando pedido",
                  "Pedido retirado pelo entregador",
                  "Pedido entregue",
                  "Pedido cancelado"];
  public status: any;

  constructor( private authTokenService: AuthTokenService,
    private orderService: OrderService) {

    if(authTokenService.getToken != null){
      this.item = authTokenService.decodePayloadJWT();
    }
  }

  ngOnInit() {
  }


  enviar(){
    this.pedidoEdit.statusPedido = this.status;
    this.orderService.atualizar(this.pedidoEdit);
    this.editarPedidoModal.hide();
  }

  showModal(item: PedidoEditar) {
   this.restaurante.address = item.restaurant.address;
   this.restaurante.city = item.restaurant.city;  
   this.restaurante.name = item.restaurant.name;
   this.restaurante.restaurantDescription = item.restaurant.restaurantDescription;  
   this.usuario.nome = item.user.nome;
   this.usuario.cpf = new CpfPipe().transform(item.user.cpf);
   this.status = item.statusPedido; 
   this.pedidoEdit = item;
   this.editarPedidoModal.show(); 
  }

  fecharModalEditPedido(){
    this.editarPedidoModal.hide(); 
  }

}
