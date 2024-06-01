import { Component, ViewChild } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { OrderDTO } from 'src/app/shared/models/order-DTO.model';
import { OrderEditComponent } from '../../order-edit/components/order-edit.component';
import { PedidoEditar } from 'src/app/shared/models/pedido-editar.model';

@Component({
  selector: 'app-order-summary-list',
  templateUrl: './order-summary-list.component.html',
  styleUrls: ['./order-summary-list.component.css']
})
export class OrderSummaryListComponent {

  @ViewChild("editarPedidoModal", { static: true })
  editarPedidoModal: OrderEditComponent;

  public tableItemPedido: OrderDTO[] = [];
  public buscaNomeString = null;
  public page = 1;
  public count = 0;
  public pageSize = 10;
  public dataAsc: boolean;
  public dataDesc: boolean;
  public pedidoAsc: boolean;
  public pedidoDesc: boolean;
  public nomeClienteAsc: boolean;
  public nomeClienteDesc: boolean;
  public nomeRestauranteAsc: boolean;
  public nomeRestauranteDesc: boolean;
  public statusPedidoAsc: boolean;
  public statusPedidoDesc: boolean;
  public iconasc1 = true;
  public iconasc2 =  true;
  public iconasc3 = true;
  public iconasc4 = true;
  public iconasc5 = true;
  public iconasc6 = true;
  public iconasc7 = true;
  public iconasc8 = true;
  public params: any = {};
  public modalOpen: boolean = false;
  public closeResult: string;
  public idUserExcluir: number;
  public checkedBuscaNumeroPedido = false;
  public checkedBuscaNome = false;
  public checkedBuscaNomeRestaurante = false;
  public checkedBuscaNomeCliente = false;
  public checkedBuscaData = true;
  public newPlaceHolder = "Busque por número do pedido";

  constructor( 
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.ordenacaoDataDesc();
  }

  getAllPedidosPage(): void {
    const params = this.getRequestParams(this.page, this.pageSize);
    this.orderService.getAll(params)
      .subscribe({
        next: (data) => {
          const { allPedidos, totalItems } = data;
          this.tableItemPedido = allPedidos;
          this.count = totalItems;
        }
      });
  }

  editarPedido(pedido: PedidoEditar) {
    this.editarPedidoModal.showModal(pedido);
  }

  getRequestParams(page: number, pageSize: number): any {

    this.params[`page`] = 0;
    if (page) {
      this.params[`page`] = page - 1;
    }

    if (pageSize) {
      this.params[`size`] = pageSize;
    }                                                                                                                                                    

    if (this.checkedBuscaData === true ) {
      this.params[`global`] = "data";
    }

    if (this.checkedBuscaNumeroPedido === true) {
      this.params[`global`] = "numeroPedido";
    }

    if (this.checkedBuscaNomeRestaurante === true) {
      this.params[`global`] = "nomeRestaurante";
    }

    if (this.checkedBuscaNomeCliente === true) {
      this.params[`global`] = "nomeCliente";
    }

    if(this.pedidoAsc === true){
      this.params[`sort`] = "pedido asc";

      if(this.buscaNomeString){
        this.params[`busca`] = this.buscaNomeString;
      }else{
        this.params[`busca`] = "";
      }

      return this.params;
    }

    if(this.pedidoDesc === true){
      this.params[`sort`] = "pedido desc";

      if(this.buscaNomeString){
        this.params[`busca`] = this.buscaNomeString;
      }else{
        this.params[`busca`] = "";
      }

      return this.params;
    }

    if(this.dataAsc === true){
      this.params[`sort`] = "data asc";

      if(this.buscaNomeString){
        this.params[`busca`] = this.buscaNomeString;
      }else{
        this.params[`busca`] = "";
      }

      return this.params;
    }

    if(this.dataDesc === true){
      this.params[`sort`] = "data desc";

      if(this.buscaNomeString){
        this.params[`busca`] = this.buscaNomeString;
      }else{
        this.params[`busca`] = "";
      }

      return this.params;
    }

    if(this.nomeRestauranteAsc === true){
      this.params[`sort`] = "nomeRestaurante asc";

      if(this.buscaNomeString){
        this.params[`busca`] = this.buscaNomeString;
      }else{
        this.params[`busca`] = "";
      }

      return this.params;
    }

    if(this.nomeRestauranteDesc === true){
      this.params[`sort`] = "nomeRestaurante desc";

      if(this.buscaNomeString){
        this.params[`busca`] = this.buscaNomeString;
      }else{
        this.params[`busca`] = "";
      }

      return this.params;
    }


    if(this.nomeClienteAsc === true){
      this.params[`sort`] = "nomeCliente asc";

      if(this.buscaNomeString){
        this.params[`busca`] = this.buscaNomeString;
      }else{
        this.params[`busca`] = "";
      }

      return this.params;
    }

    if(this.nomeClienteDesc === true){
      this.params[`sort`] = "nomeCliente desc";

      if(this.buscaNomeString){
        this.params[`busca`] = this.buscaNomeString;
      }else{
        this.params[`busca`] = "";
      }

      return this.params;
    }

    if(this.statusPedidoAsc === true){
      this.params[`sort`] = "statusPedido asc";

      if(this.buscaNomeString){
        this.params[`busca`] = this.buscaNomeString;
      }else{
        this.params[`busca`] = "";
      }

      return this.params;
    }

    if(this.statusPedidoDesc === true){
      this.params[`sort`] = "statusPedido desc";

      if(this.buscaNomeString){
        this.params[`busca`] = this.buscaNomeString;
      }else{
        this.params[`busca`] = "";
      }

      return this.params;
    }


    if(this.buscaNomeString){
      if(this.buscaNomeString){
        this.params[`busca`] = this.buscaNomeString;
      }else{
        this.params[`busca`] = "";
      }
    }
    else{
      this.params[`busca`] = "";
      this.params[`sort`] = "nome asc";
      return this.params;
    }

  }

  handlePageChange(event: number): void {
    this.page = event;
    this.getAllPedidosPage();
  }

  ordenacaoDataAsc(){
    this.iconasc1 = true;
    this.iconasc2 = true;
    this.iconasc3 = false;
    this.iconasc4 = true;
    this.iconasc5 = true;
    this.iconasc6 = true;
    this.iconasc7 = true;
    this.iconasc8 = true;
    this.dataAsc = true;
    this.dataDesc = false;
    this.pedidoAsc = false;
    this.pedidoDesc = false;
    this.nomeClienteAsc = false;
    this.nomeClienteDesc = false;
    this.statusPedidoAsc = false;
    this.statusPedidoDesc = false;
    this.nomeRestauranteAsc = false;
    this.nomeRestauranteDesc = false;
    this.getAllPedidosPage();
  }

  ordenacaoDataDesc(){
    this.iconasc1 = true;
    this.iconasc2 = true;
    this.iconasc3 = true;
    this.iconasc4 = false;
    this.iconasc5 = true;
    this.iconasc6 = true;
    this.iconasc7 = true;
    this.iconasc8 = true;
    this.dataAsc = false;
    this.dataDesc = true;
    this.pedidoAsc = false;
    this.pedidoDesc = false;
    this.nomeClienteAsc = false;
    this.nomeClienteDesc = false;
    this.statusPedidoAsc = false;
    this.statusPedidoDesc = false;
    this.nomeRestauranteAsc = false;
    this.nomeRestauranteDesc = false;
    this.getAllPedidosPage();
  }

  ordenacaoNumeroPedidoAsc(){
    this.iconasc1 = false;
    this.iconasc2 = true;
    this.iconasc3 = true;
    this.iconasc4 = true;
    this.iconasc5 = true;
    this.iconasc6 = true;
    this.iconasc7 = true;
    this.iconasc8 = true;
    this.dataAsc = false;
    this.dataDesc = false;
    this.pedidoAsc = true;
    this.pedidoDesc = false;
    this.nomeClienteAsc = false;
    this.nomeClienteDesc = false;
    this.statusPedidoAsc = false;
    this.statusPedidoDesc = false;
    this.nomeRestauranteAsc = false;
    this.nomeRestauranteDesc = false;
    this.getAllPedidosPage();
  }

  ordenacaoNumeroPedidoDesc(){
    this.iconasc1 = true;
    this.iconasc2 = false;
    this.iconasc3 = true;
    this.iconasc4 = true;
    this.iconasc5 = true;
    this.iconasc6 = true;
    this.iconasc7 = true;
    this.iconasc8 = true;
    this.dataAsc = false;
    this.dataDesc = false;
    this.pedidoAsc = false;
    this.pedidoDesc = true;
    this.nomeClienteAsc = false;
    this.nomeClienteDesc = false;
    this.statusPedidoAsc = false;
    this.statusPedidoDesc = false;
    this.nomeRestauranteAsc = false;
    this.nomeRestauranteDesc = false;
    this.getAllPedidosPage();
  }

  ordenacaoRestauranteAsc(){
    this.iconasc1 = true;
    this.iconasc2 = true;
    this.iconasc3 = true;
    this.iconasc4 = true;
    this.iconasc5 = false;
    this.iconasc6 = true;
    this.iconasc7 = true;
    this.iconasc8 = true;
    this.dataAsc = false;
    this.dataDesc = false;
    this.pedidoAsc = false;
    this.pedidoDesc = false;
    this.nomeClienteAsc = false;
    this.nomeClienteDesc = false;
    this.statusPedidoAsc = false;
    this.statusPedidoDesc = false;
    this.nomeRestauranteAsc = true;
    this.nomeRestauranteDesc = false;
    this.getAllPedidosPage();
  }

  ordenacaoRestauranteDesc(){
    this.iconasc1 = true;
    this.iconasc2 = true;
    this.iconasc3 = true;
    this.iconasc4 = true;
    this.iconasc5 = true;
    this.iconasc6 = false;
    this.iconasc7 = true;
    this.iconasc8 = true;
    this.dataAsc = false;
    this.dataDesc = false;
    this.pedidoAsc = false;
    this.pedidoDesc = false;
    this.nomeClienteAsc = false;
    this.nomeClienteDesc = false;
    this.statusPedidoAsc = false;
    this.statusPedidoDesc = false;
    this.nomeRestauranteAsc = false;
    this.nomeRestauranteDesc = true;
    this.getAllPedidosPage();
  }

  ordenacaoClienteAsc(){
    this.iconasc1 = true;
    this.iconasc2 = true;
    this.iconasc3 = true;
    this.iconasc4 = true;
    this.iconasc5 = true;
    this.iconasc6 = true;
    this.iconasc7 = false;
    this.iconasc8 = true;
    this.dataAsc = false;
    this.dataDesc = false;
    this.pedidoAsc = false;
    this.pedidoDesc = false;
    this.nomeClienteAsc = true;
    this.nomeClienteDesc = false;
    this.statusPedidoAsc = false;
    this.statusPedidoDesc = false;
    this.nomeRestauranteAsc = false;
    this.nomeRestauranteDesc = false;
    this.getAllPedidosPage();
  }

  ordenacaoClienteDesc(){
    this.iconasc1 = true;
    this.iconasc2 = true;
    this.iconasc3 = true;
    this.iconasc4 = true;
    this.iconasc5 = true;
    this.iconasc6 = true;
    this.iconasc7 = true;
    this.iconasc8 = false;
    this.dataAsc = false;
    this.dataDesc = false;
    this.pedidoAsc = false;
    this.pedidoDesc = false;
    this.nomeClienteAsc = false;
    this.nomeClienteDesc = true;
    this.statusPedidoAsc = false;
    this.statusPedidoDesc = false;
    this.nomeRestauranteAsc = false;
    this.nomeRestauranteDesc = false;
    this.getAllPedidosPage();
  }


  buscaNome(buscaNomeString : String){
    buscaNomeString = this.buscaNomeString;
    this.getAllPedidosPage();
  }

  buscaNomeRestauranteCheck(checkedBuscaNomeRestaurante){
    if(checkedBuscaNomeRestaurante === true){
      this.newPlaceHolder = "Busque por nome do restaurante";
      this.checkedBuscaData = false;
      this.checkedBuscaNumeroPedido = false;
      this.checkedBuscaNomeCliente = false;
    }
  }

  buscaNomeClienteCheck(checkedBuscaNomeCliente){
    if(checkedBuscaNomeCliente === true){
      this.newPlaceHolder = "Busque por nome do cliente";
      this.checkedBuscaData = false;
      this.checkedBuscaNumeroPedido = false;
      this.checkedBuscaNomeRestaurante = false;
    }
  }

  buscaDataCheck(checkedBuscaData){
    if(checkedBuscaData === true){
      this.newPlaceHolder = "Busque por data";
      this.checkedBuscaNumeroPedido = false;
      this.checkedBuscaNomeRestaurante = false;
      this.checkedBuscaNomeCliente = false;
    }
  }

  buscaNumeroPedidoCheck(checkedBuscaNumeroPedido){
    if(checkedBuscaNumeroPedido === true){
      this.newPlaceHolder = "Busque por número do pedido";
      this.checkedBuscaData = false;
      this.checkedBuscaNomeRestaurante = false;
      this.checkedBuscaNomeCliente = false;
    }
  }


}
