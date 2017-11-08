import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  malist: any = new Array();
  user: User = new User( );
  constructor(private _userService: UserService) {
  }

  ngOnInit() {
    this._userService.getAllUsers().subscribe(data => {
      this.malist = data;
      this.malist.map((user) => {
        console.log('user:', user);
      })
      console.log(data);
    });
  }
}
