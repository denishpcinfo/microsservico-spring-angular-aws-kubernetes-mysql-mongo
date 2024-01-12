import { Component } from '@angular/core';
import { AuthTokenService } from 'src/app/services/auth/auth-token.service';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from 'src/app/shared/models/User';

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

    console.log("this.user");
    console.log(this.user);

  }
  
  getProfile() {
    this.profileService.getProfileId(this.item.sub).subscribe(
      data => {
        this.user = data;
      }
    )
  }
}
