import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  public user: User;

  constructor( private profileService: ProfileService) {}

  ngOnInit() {
    this.getProfile();
  }
  
  getProfile() {
    this.profileService.getProfile().subscribe(
      data => {
        this.user = data;
      }
    )
  }
}
