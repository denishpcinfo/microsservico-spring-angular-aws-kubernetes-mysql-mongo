import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthTokenService } from 'src/app/services/auth/auth-token.service';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {

  public sidebar: any;
  public closeBtn: any;
  public searchBtn: any;
  public abrir: boolean;
  public user: any;
  public item: any;
  public isAdmin = false;
  public isUser = false;
  private destroy$ = new Subject<void>();

  constructor( private router: Router,
               private profileService: ProfileService,
               private authTokenService: AuthTokenService ) { }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(){
    this.sidebar = document.querySelector(".sidebar");
    this.closeBtn = document.querySelector("#btn");
    this.searchBtn = document.querySelector(".bx-search");
    this.abrir = true;
    
    if(this.authTokenService.getToken != null){
      this.item = this.authTokenService.decodePayloadJWT();
    } 
    this.getProfile();
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

  
  getProfile() {
    this.user = new User();
    this.profileService.getProfileId(this.item.sub)
    .pipe(takeUntil(this.destroy$))
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
}
