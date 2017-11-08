import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';
import {Router,Route} from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  private user: User = new User();
  constructor(private _userService: UserService,
    private _router: Router) { }

  ngOnInit() {
  }

  addUser(user) {
    //console.dir(user);
    this._userService.addUser(user).subscribe((data) => { console.log('User add successfully from fe') });
    this._router.navigate(['/login']);
  }

}
