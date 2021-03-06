import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FriendsComponent } from './friends/friends.component';
import { GroupsComponent } from './groups/groups.component';
import { CreateacctComponent} from './createacct/createacct.component';
import { LogoutComponent } from './logout/logout.component';
import { SettingsComponent } from './settings/settings.component';
import { MessageComponent } from './message/message.component';
import { AuthGaurdService } from './service/auth-guard.service';
import { AdminComponent } from './admin/admin.component';
import { AdminGuardService } from './service/admin-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent,canActivate:[AuthGaurdService] },
  { path: 'friends',component: FriendsComponent,canActivate:[AuthGaurdService]},
  { path: 'groups', component: GroupsComponent,canActivate:[AuthGaurdService]},
  { path: 'createacct', component: CreateacctComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'settings', component: SettingsComponent,canActivate:[AuthGaurdService]},
  { path: 'message', component: MessageComponent,canActivate:[AuthGaurdService]},
  { path: 'admin', component: AdminComponent,canActivate:[AdminGuardService]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
