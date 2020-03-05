import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service/api.service';
import { Observer } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-timeline',
  templateUrl: './user-timeline.component.html',
  styleUrls: ['./user-timeline.component.sass']
})
export class UserTimelineComponent implements OnInit {
  timeline : [];
  timelineObs$ : Observer<any>;
  constructor(
    private api: ApiService,
    private toastr : ToastrService
    ) { }

  ngOnInit() {
    this.timelineObs$ = {
      next : data => {
        console.log(data);
        this.timeline = data["timeline"];
      },
      error : err => this.toastr.error(err),
      complete : () => this.toastr.success("Request To Fetch Timeline Data Completed.")
    }
    this.api.fetchTimelineDetails().subscribe(this.timelineObs$);
  }

}
