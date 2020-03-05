import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service/api.service';
import { ToastrService } from 'ngx-toastr';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-events-tab',
  templateUrl: './events-tab.component.html',
  styleUrls: ['./events-tab.component.sass']
})
export class EventsTabComponent implements OnInit {
  currEvent : any;
  eventsObs$ : Observer<any>;
  status = false;
  events : [];
  constructor(
    private api : ApiService,
    private toastr : ToastrService
  ) { }

  ngOnInit() {
    this.eventsObs$ = {
      next : data => {
        console.log("Fetched Competitons",data);
        this.events = data["events"];
      },
      error : err => this.toastr.error(err),
      complete : () => this.toastr.success("Request To Fetch Competions Completed") 
    }
    this.api.getEventsForUser().subscribe(this.eventsObs$);
  }
  openDetailsModal(data){
    this.currEvent = data;
    this.status = true;
  }
  switchState(state : boolean){
    this.status = state;
  }

}
