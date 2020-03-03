import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service/api.service';
import { Observer } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-competition-page',
  templateUrl: './competition-page.component.html',
  styleUrls: ['./competition-page.component.sass']
})
export class CompetitionPageComponent implements OnInit {
  constructor(
    private api: ApiService,
    private toastr : ToastrService
  ) { }

  ngOnInit() {

  }

}
