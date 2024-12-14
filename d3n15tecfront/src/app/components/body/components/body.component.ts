import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Restaurant } from 'src/app/shared/models/restaurant.model';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, OnDestroy {

  public restaurantes: Restaurant[] = [];
  public stick: boolean = false;
  public limit: number = 5;
  public user: any;
  public item: any;
  public roleUser: any;
  public isAdmin = false;
  public isUser = false;
  public isManager = false;
  public customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    touchDrag: true,
    autoplayHoverPause: true,
    navSpeed: 300,
    responsive: {
      1500: {
        items: 5,
        margin: 0,
      },
      1024: {
        items: 4,
        margin: 0,
      },
      767: {
        items: 3,
        margin: 10,
      },
      576: {
        items: 3,
        margin: 5,
      },
      480: {
        items: 2,
        margin: 1,
      },
      0: {
        items: 1,
        margin: 0,
      }
    }
  }

  public customOptionsFood: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: false,
    autoWidth: false,
    touchDrag: true,
    autoplayHoverPause: true,
    navSpeed: 300,
    responsive: {
      1500: {
        items: 5,
        margin: 10,
      },
      1024: {
        items: 4,
        margin: 0,
      },
      767: {
        items: 3,
        margin: 10,
      },
      576: {
        items: 3,
        margin: 5,
      },
      480: {
        items: 2,
        margin: 1,
      },
      0: {
        items: 1,
        margin: 0,
      }
    }
  }

  private destroy$ = new Subject<void>();

  constructor(private restaurantService: RestaurantService,
              private router: Router ) { }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit() {
    this.buscarRestaurantesSlider();
    this.onWindowScroll();
    this.permissaoUser();
  }


  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number >= 240) { 
      this.stick = false;
    } else {
      this.stick = true;
    }
  }

  buscarRestaurantesSlider(){
    this.restaurantService.getRestaurantesCarrossel
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      response => {
        this.restaurantes = response;
      }
    );
  }

  permissaoUser(){
    this.roleUser = this.getRole();
    
    if(this.roleUser === "ADMIN"){
      this.isAdmin = true;
    }else if(this.roleUser === "USER"){
      this.isUser = true;
    }else if(this.roleUser === "MANAGER"){
      this.isManager = true;
    }
  }

  getRole(){
    try {
      return localStorage.getItem('ROLE');
    } catch (Error) {
      this.router.navigate(["/login"]);
      return null;
    }
  }

  onButtonClick(id) {
    this.router.navigate(['/food', id]);
  }

  onButtonRouteMinhaConta() {
    this.router.navigate(['/minha-conta']);
  }
}
