import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { InvitationService } from '../invitation.service';
import { User } from '../models/user';
import { Response } from '@angular/http';
import { Observable } from 'rxjs'
import 'rxjs';

@Component({
  selector: 'app-sent-invitation',
  templateUrl: './sent-invitation.component.html',
  styleUrls: ['./sent-invitation.component.css']
})
export class SentInvitationComponent implements OnInit {
  private recievedInvitation: any;

  private futureFriends = [];
  private currentUser: User = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private _userService: UserService,
    private _invitationService: InvitationService) { }

  ngOnInit() {
    this._invitationService.getRecievedInvitations(this.currentUser._id)
      .map((response: any) => {
        return JSON.parse(response._body);
      })
      .subscribe((data) => {
        this.recievedInvitation = data;
        console.log(this.recievedInvitation);
        this.recievedInvitation.forEach(element => {
          this.popultateReciever(element.recieverId);
        });
      });
    console.log(this.futureFriends);
  }

  public acceptInvitation() { }

  public popultateReciever(recieverId) {
    this._userService.getUserById(recieverId)
    .map((data:any)=>{
      return JSON.parse(data._body);
    })
    .subscribe((user) => {
      this.futureFriends.push(user);
    });
  }


  public getAvatarUrl(gender){
    switch (gender.toUpperCase()) {
      case 'HOMME':
        return 'assets/homme.jpg';
      case 'FEMME':
      return 'assets/femme.jpg'
      default:
         return 'assets/homme.jpg';
    }
  }

}
