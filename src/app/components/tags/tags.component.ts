import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.sass']
})
export class TagsComponent implements OnInit {
  tagBack : any;
  tagCat : any;
  constructor(
    private aroute : ActivatedRoute
  ) { }

  ngOnInit() {
  this.aroute.queryParams.subscribe(params =>{
      this.tagBack = params['tagBack'];
      this.tagCat = params['tagCategory'] || 'assets/comps.gif';
  });

  }

}
