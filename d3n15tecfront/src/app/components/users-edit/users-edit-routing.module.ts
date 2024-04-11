import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersEditComponent } from './components/users-edit.component';

const routes: Routes = [
  { path: 'editar-usuario', component: UsersEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersEditRoutingModule { }
