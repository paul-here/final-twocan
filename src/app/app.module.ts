import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {fakeBackendProvider} from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FriendsComponent } from './friends/friends.component';
import { GroupsComponent } from './groups/groups.component';
import { CreateacctComponent } from './createacct/createacct.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FriendsComponent,
    GroupsComponent,
    CreateacctComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
