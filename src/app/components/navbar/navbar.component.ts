import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  modalOpenState = false;
  constructor() { }

  ngOnInit() {
  }
  turnOffAddEvent(modalstate : boolean){
    this.modalOpenState = modalstate;
  }

}
