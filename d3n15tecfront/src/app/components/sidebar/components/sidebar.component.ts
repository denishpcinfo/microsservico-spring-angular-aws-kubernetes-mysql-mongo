import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public sidebar: any;
  public closeBtn: any;
  public searchBtn: any;
  public abrir: boolean;

  constructor( private router: Router) {
  }

  ngOnInit(): void {
    this.sidebar = document.querySelector(".sidebar");
    this.closeBtn = document.querySelector("#btn");
    this.searchBtn = document.querySelector(".bx-search");
    this.abrir = true;
  }

  public sair() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  public abrirFechar(){
      if(this.abrir){
        this.sidebar.classList.toggle("open");
        this.abrir = true;
      }else{
        this.sidebar.classList.toggle("closed");
        this.abrir = false;
      }
  }
}
