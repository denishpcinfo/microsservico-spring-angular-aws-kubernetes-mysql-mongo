import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthTokenService } from 'src/app/services/auth/auth-token.service';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from 'src/app/shared/models/user.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public item: any;
  public user: User;

  constructor( private  authTokenService: AuthTokenService,
               private profileService: ProfileService,
              //  private toastr: ToastrService
               ) {

    if(authTokenService.getToken != null){
      this.item = authTokenService.decodePayloadJWT();
    }
    
  }

  ngOnInit() {
    this.getProfile();

  }
  
  getProfile() {
    this.user = new User();
    this.profileService.getProfileId(this.item.sub)
    .subscribe(
      res => {

        this.user  = res;

        // this.toastr.success("ok", "Sucesso!");

      },
      erro => {
        // if (erro.error)
        //   this.toastr.error(erro.error.titulo, `Erro ${erro.error.status}!`);
        // else this.toastr.error("Erro", "Erro!");
      }
    
    );


  }
}
