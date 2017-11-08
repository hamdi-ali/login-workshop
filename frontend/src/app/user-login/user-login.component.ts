import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import {UserService} from '../user.service';
import {Router,Route,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  private _user: User = new User();
  private result:any;
  private showMessage:boolean=false;
  

  constructor(
    private _userService:UserService,
    private route:ActivatedRoute,
    private router:Router 
  ) {

     }

  ngOnInit() {
  }

  login(user) {
    this.showMessage=true;
    return this._userService.authenticate(user)
    .map((data:any)=>{
        //console.log('***- ',typeof data,'************  ',data);
        
        return JSON.parse(data._body);
    }).
    subscribe((response)=>{
      if(response.err==='Login Succeed'){
        localStorage.setItem("currentUser",JSON.stringify(response.message));
        this.router.navigate(['/home']);
      }else{
        localStorage.removeItem("currentUser");
        this.router.navigate(['/login']);
      }
      this.result=response;
    })
  }

 
}


