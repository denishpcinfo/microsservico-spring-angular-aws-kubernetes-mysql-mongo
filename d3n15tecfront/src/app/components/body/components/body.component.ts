import { Component, HostListener, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Restaurant } from 'src/app/shared/models/restaurant.model';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { User } from 'src/app/shared/models/user.model';
import { AuthTokenService } from 'src/app/services/auth/auth-token.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public restaurantes: Restaurant[] = [];
  public stick: boolean = false;
  public limit: number = 5;
  public user: User;
  public item: any;
  public isAdmin = false;
  public isUser = false;
  public customOptions: OwlOptions = {
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
        items: 1,
        margin: -1500,
      },
      1024: {
          items: 1,
          margin: -1200,
      },
      767: {
          items: 1,
          margin: -570
      },
      576: {
          items: 1,
          margin: 0
      },
      480: {
          items: 1,
          margin: 0
      },
      0: {
          items: 1,
          margin: 0
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
    responsive: {
      1500: {
        items: 1,
        margin: -1500,
      },
      1024: {
          items: 1,
          margin: -1200,
      },
      767: {
          items: 1,
          margin: -570
      },
      0: {
          items: 1,
          margin: 0
      }
    }
  }

  constructor(private restaurantService: RestaurantService,
              private profileService: ProfileService,
              private authTokenService: AuthTokenService ) { }

  ngOnInit() {
    this.buscarRestaurantesSlider();
    this.onWindowScroll();

    if(this.authTokenService.getToken != null){
      this.item = this.authTokenService.decodePayloadJWT();
    } 
    this.getProfile();
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
    this.restaurantService.getRestaurantesCarrossel.subscribe(
      response => {
        this.restaurantes = response;
      }
    );
  }

  getProfile() {
    this.user = new User();
    this.profileService.getProfileId(this.item.sub)
    .subscribe({
      next: (data) => {
        this.user = data;
        if(this.user.role === "ADMIN"){
          this.isAdmin = true;
        }else if(this.user.role === "USER"){
          this.isUser = true;
        }
      }
    })
  }
}
