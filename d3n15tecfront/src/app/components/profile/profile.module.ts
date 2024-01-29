import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './components/profile.component';
import { CpfPipe } from 'src/app/shared/pipes/cpf.pipe';
import { TelefonePipe } from 'src/app/shared/pipes/telefone.pipe';


@NgModule({
  declarations: [
    ProfileComponent,
    CpfPipe,
    TelefonePipe
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  exports:[
    ProfileComponent
  ],
  providers: [CpfPipe]
})
export class ProfileModule { }
