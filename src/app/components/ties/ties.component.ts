import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service/api.service';
import { ToastrService } from 'ngx-toastr';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-ties',
  templateUrl: './ties.component.html',
  styleUrls: ['./ties.component.sass']
})
export class TiesComponent implements OnInit {

  tiesObs$ :Observer<any>;
  tiesIds : [];
  ties = [];
  constructor(
    private api :ApiService,
    private toastr : ToastrService
    ) { }

  ngOnInit() {
    this.getAllTieIds();
  }
  getAllTieIds(){
    this.tiesObs$ = {
      next : data =>{
        this.tiesIds = data["ties"];
        this.getTies();
        this.toastr.success("Successfully Fetched ties!");
      },
      error : err => this.toastr.error(err),
      complete : () => this.toastr.info("Request To Fetch Ties Completed!")
    }
    this.api.getMyTies().subscribe(this.tiesObs$);
  }
  getTies(){
    this.tiesIds.forEach(tie => {
      this.api.getUserDetails(tie).subscribe(
        data => {
          this.ties.push(data["user"]);
        },
        err => this.toastr.error(err),
        () => console.log("Request to fetch ties completed")
      )
    });
  }
  cutthisTie(id : string){
    this.api.cutTheTie(id).subscribe(
      data => {
        this.toastr.success(data["message"]);
        this.getAllTieIds();
      },
      err => this.toastr.error(err),
      () => this.toastr.info("Request To Cut Tie Completed")
    )
  }

}
