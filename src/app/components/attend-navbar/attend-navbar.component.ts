import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api-service/api.service';
import { ToastrService } from 'ngx-toastr';

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
  @Input() compId : string;
  userId = localStorage.getItem("user");
  constructor(
    private api : ApiService,
    private toastr : ToastrService
  ) { }

  ngOnInit() {
  }
  attendComp(){
    this.api.attendCompetition(this.compId).subscribe(
      data => this.toastr.success(data["message"]),
      err => this.toastr.error(err),
      () => this.toastr.info("Request To Attend Cometition Completed")
    )
  }

}
