import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './components/welcome.component';
import { HeaderModule } from '../header/header.module';
import { BodyModule } from '../body/body.module';
import { FooterModule } from '../footer/footer.module';
import { ProfileModule } from '../profile/profile.module';

@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    HeaderModule,
    BodyModule,
    FooterModule,
    ProfileModule
  ],
  exports:[
    WelcomeComponent
  ]
})
export class WelcomeModule { }
