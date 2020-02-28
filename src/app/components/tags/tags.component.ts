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
  events = [
    {title:'Discussion on evils of AI', image: 'assets/tech.jpg',people: 200},
    {title:'Benefits of excercising daily', image: 'assets/sports.jpg',people: 100},
    {title:'Hot reloading and web  ', image: 'assets/coding.png',people: 1000},
    {title:'Party @ Avon ', image: 'assets/party.jfif',people: 300},
    {title:'Python Programming 101 ', image: 'assets/python.png',people: 100},
    {title:'Cricket tournament ', image: 'assets/cricket.jpg',people: 600},
  ]
  open
  ngOnInit() {
  this.aroute.queryParams.subscribe(params =>{
      this.tagBack = params['tagBack'];
      this.tagCat = params['tagCategory'] || 'assets/comps.gif';
  });

  }

}
