import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports:[RouterOutlet,RouterLink]
})
export class HeaderComponent implements OnInit {
  router = inject(Router);
  userdata: any;
  Userdata: any;

  constructor() { }

  ngOnInit() {
    this.userdata = JSON.parse(localStorage.getItem('userdata') || '{}');

  }
  logOFF(){
    localStorage.removeItem('userdata');
    this.router.navigateByUrl('/login');
  }
}
