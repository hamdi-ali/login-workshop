import { Component, OnInit } from '@angular/core';
import {Router,Route} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);

  }

}
