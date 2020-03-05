import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service/api.service';
import { Observer } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-competition-page',
  templateUrl: './competition-page.component.html',
  styleUrls: ['./competition-page.component.sass']
})
export class CompetitionPageComponent implements OnInit {
  compId : String;
  compObs$ : Observer<any>;
  compDetails : Object;
  organiser : Object;
  constructor(
    private api: ApiService,
    private toastr : ToastrService,
    private aroute : ActivatedRoute
  ) { }

  ngOnInit() {
    this.compObs$ = {
      next : data => {
        this.compDetails = data["comp"];
        this.organiser = data["organizer"];
        this.toastr.info("Fetched Competition Details")
      },
      error : err => this.toastr.error(err),
      complete : () => this.toastr.success("Request To Get Competition details Completed")
    }
    this.aroute.params.subscribe(params=>{
      this.compId = params.id;
      this.api.fetchCompetitionDetails(this.compId).subscribe(this.compObs$);
    });

  }

}
