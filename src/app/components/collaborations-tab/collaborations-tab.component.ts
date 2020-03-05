import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-collaborations-tab',
  templateUrl: './collaborations-tab.component.html',
  styleUrls: ['./collaborations-tab.component.sass']
})
export class CollaborationsTabComponent implements OnInit {

  constructor(
    private toastr : ToastrService
  ) { }

  ngOnInit() {
  }
  showNotif(){
    this.toastr.success("You Successfully Join A Collaboration");
  }

}
