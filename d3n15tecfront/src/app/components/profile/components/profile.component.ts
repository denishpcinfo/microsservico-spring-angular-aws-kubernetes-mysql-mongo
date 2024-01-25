import { Component } from '@angular/core';
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
               private profileService: ProfileService) {

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
    .subscribe({
      next: (data) => {
        this.user = data;
      }
    })
    
  }
}
