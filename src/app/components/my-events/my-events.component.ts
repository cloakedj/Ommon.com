import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.sass']
})
export class MyEventsComponent implements OnInit {
  events : any;
  myEvents : [{
    type: string,
    event : []
  }];
  constructor(
    private api : ApiService,
    private toastr : ToastrService
  ) { }

  ngOnInit() {
    this.api.getMyEvents().subscribe(
      data =>{
        this.events = data["myevents"];
        this.populateEventsData();
        this.toastr.success("Fetched My Events");
      },
      err => this.toastr.error(err),
      () => this.toastr.info("Request to fetch my events Completed")
    )
  }
  populateEventsData(){
    this.events.forEach(event => {
      if (event.type == "event")
      {
      this.api.fetchEventDetails(event.id).subscribe(
        data =>  this.myEvents.push({
          type : "event",
          event : data["event"]}),
        err => this.toastr.error(err),
        () => console.log("Request to get event details completed")
      )
      }
      else
      {
        this.api.fetchCompetitionDetails(event.id).subscribe(
          data =>  this.myEvents.push({
            type : "competition",
            event : data["comp"]}),
          err => this.toastr.error(err),
          () => console.log("Request to get comp details completed")
        )
      }
    });
  }

}
