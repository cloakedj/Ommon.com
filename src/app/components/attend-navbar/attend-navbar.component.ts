import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-attend-navbar',
  templateUrl: './attend-navbar.component.html',
  styleUrls: ['./attend-navbar.component.sass']
})
export class AttendNavbarComponent implements OnInit {
  @Input() date : any;
  @Input() time : any;
  @Input() title : string;
  @Input() participants : [];
  userId = localStorage.getItem("user");
  constructor() { }

  ngOnInit() {
  }

}
