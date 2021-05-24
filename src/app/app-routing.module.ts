import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { UsersComponent } from './components/users/users.component';
import { UsersreposComponent } from './components/usersrepos/usersrepos.component';

const routes: Routes = [
  {path:'profile', component:ProfileComponent},
  {path:'users', component:UsersComponent},
  {path:'repos', component: UsersreposComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
