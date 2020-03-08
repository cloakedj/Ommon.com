import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { ApiService } from 'src/app/services/api-service/api.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent implements OnInit {
  userDataObs$ : Observer<any>;
  userId : string;
  loggedInUserId = localStorage.getItem("user");
  userData : any;
  loggedInUserData : any;
  constructor(
    private api : ApiService,
    private toastr : ToastrService,
    private aroute  : ActivatedRoute
  ) { }

  ngOnInit() {
    this.aroute.params.subscribe(param =>{
      this.userId = param["id"];
      this.getUserInfo(this.userId);
      this.getUserInfo(this.loggedInUserId,"Y");
    });
  }
  getUserInfo(id :string,currUser?: string){
    this.userDataObs$ = {
      next : data => {
        if(currUser)
        this.loggedInUserData = data["user"];
        else
        this.userData = data["user"];
        this.toastr.success("Successfully Fetched User Details")
      },
      error : err => this.toastr.error(err),
      complete : () => this.toastr.info("Request to get user details Completed")
    }
    this.api.getUserDetails(id).subscribe(this.userDataObs$);
  }
  buildTie(){
    this.api.buildATie(this.userData._id).subscribe(
      data => {
        this.toastr.success(data["message"]);
        this.getUserInfo(this.userId,"Y");
      },
      err => this.toastr.error(err),
      () => this.toastr.info("Request To Build Tie Completed")
    );
  }
  cutthisTie(){
    this.api.cutTheTie(this.userData._id).subscribe(
      data => {
        this.toastr.success(data["message"]);
        this.getUserInfo(this.userId,"Y");
      },
      err => this.toastr.error(err),
      () => this.toastr.info("Request To Cut Tie Completed")
    )
  }

}
