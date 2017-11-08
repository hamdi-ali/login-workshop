import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { UserService } from './user.service';
import{FormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http';
import { MenuComponent } from './menu/menu.component';

import {RouterModule,Routes} from '@angular/router';
import{HomeComponent}from './home/home.component';
import{ProfileComponent}from './profile/profile.component';
import {AuthService} from './auth.service';
import{InvitationService} from './invitation.service';
import { SendingInvitationComponent } from './sending-invitation/sending-invitation.component';
import { SentInvitationComponent } from './sent-invitation/sent-invitation.component';


const routes :Routes=[
  { path:'login',component:UserLoginComponent},
  { path:'home',component:HomeComponent,canActivate:[AuthService]},
  { path:'users',component:UserListComponent,canActivate:[AuthService]},
  { path:'profile',component:ProfileComponent,canActivate:[AuthService]},
  { path:'signup',component:SignUpFormComponent},
  {path:'**' , redirectTo:'login'}

]





@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserLoginComponent,
    SignUpFormComponent,
    MenuComponent,
    HomeComponent,
    ProfileComponent,
    SendingInvitationComponent,
    SentInvitationComponent,
  
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService,AuthService,InvitationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
