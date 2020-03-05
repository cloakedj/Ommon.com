import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observer } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api-service/api.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.sass']
})
export class TagsComponent implements OnInit {
  tagBack : any;
  tagCat : any;
  compsObs$ : Observer<any>;
  userId : string;
  competitions : [];
  constructor(
    private aroute : ActivatedRoute,
    private toastr : ToastrService,
    private api : ApiService
  ) { }
  ngOnInit() {
  this.aroute.queryParams.subscribe(params =>{
      this.tagBack = params['tagBack'];
      this.tagCat = params['tagCategory'] || 'assets/comps.gif';
  });
  this.userId = localStorage.getItem("user");
  this.compsObs$ = {
    next : data => {
      console.log("Fetched Competitons",data);
      this.competitions = data["comps"];
    },
    error : err => this.toastr.error(err),
    complete : () => this.toastr.success("Request To Fetch Competions Completed") 
  }
  this.api.getCompetitionsForUser().subscribe(this.compsObs$);
  }

}
