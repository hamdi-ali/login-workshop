import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private _user:any={};
   
  constructor() {
    this._user=JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    this._user=JSON.parse(localStorage.getItem('currentUser'));
  }

}
