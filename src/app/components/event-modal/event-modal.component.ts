import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api-service/api.service';
import { Observer } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import {EventEntity } from '../../entities/event.entity';
@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.sass']
})
export class EventModalComponent implements OnInit {
  @Input() Evt : any;
  @Input() showStatus : boolean;
  @Output() toggle  = new EventEmitter<boolean>();
  organizer : any;
  userId = localStorage.getItem("user");
  eventObs$ : Observer<any>;
  constructor(private api : ApiService,
    private toastr : ToastrService) { }

  ngOnInit() {
  }
  getEventData(id : any){
    this.eventObs$ = {
      next : data => this.organizer = data["organiser"],
      error : err => this.toastr.error(err),
      complete : () => this.toastr.success("Request to get Event Details Completed")
    }
    this.api.fetchEventDetails(id).subscribe(this.eventObs$);
  }
  updateParent(state : boolean){
    this.toggle.emit(state);
  }
  attend(id){
    this.api.attendEvent(id).subscribe(
      data => 
      {
        this.toastr.success(data["message"]);
        this.getEventData(id);
      },
      error => this.toastr.error(error),
      () => this.toastr.info("Request to attend event completed")
    )
  }
  interested(id){
    this.api.addOneToInterested(id).subscribe(
      data => {
        this.toastr.success(data["message"]);
        this.getEventData(id);
      },
      err => this.toastr.error(err),
      () => this.toastr.info("Request to add interested Completed")
    )
  }

}
