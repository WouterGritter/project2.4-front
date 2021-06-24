import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  keyExists: string;

  constructor() {

  }

  ngOnInit(): void {
    this.keyExists = localStorage.getItem('jwttoken');
  }

}
