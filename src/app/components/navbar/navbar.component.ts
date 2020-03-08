import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api-service/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  modalOpenState = false;
  userId = localStorage.getItem("user");
  constructor(private router : Router,
    private toastr : ToastrService,
    private api : ApiService) { }

  ngOnInit() {
  }
  turnOffAddEvent(modalstate : boolean){
    this.modalOpenState = modalstate;
  }
  openChats(){
    window.location.href= "http://localhost:4401/inbox";
  }
  logOut(){
    this.api.logUserOut().subscribe(
      data => {
        this.toastr.info(data["message"]);
        localStorage.removeItem("user");
      },
      err => this.toastr.error(err),
      () => 
      {
        this.router.navigate(['/login']);
      }
    )
  }

}
