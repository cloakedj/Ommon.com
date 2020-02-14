import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competitions-tab',
  templateUrl: './competitions-tab.component.html',
  styleUrls: ['./competitions-tab.component.sass']
})
export class CompetitionsTabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  categories =[
    {title : 'Technology', image: 'assets/tech.jpg'},
    {title : 'Sports & Fitness', image: 'assets/sports.jpg'},
    {title : 'Coding', image: 'assets/coding.png'},
  ]
}
