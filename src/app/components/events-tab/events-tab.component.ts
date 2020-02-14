import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-tab',
  templateUrl: './events-tab.component.html',
  styleUrls: ['./events-tab.component.sass']
})
export class EventsTabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  events = [
    {title:'Discussion on evils of AI', image: 'assets/tech.jpg',people: 200},
    {title:'Benefits of excercising daily', image: 'assets/sports.jpg',people: 100},
    {title:'Hot reloading and web  ', image: 'assets/coding.png',people: 1000},
    {title:'Party @ Avon ', image: 'assets/party.jfif',people: 300},
    {title:'Python Programming 101 ', image: 'assets/python.png',people: 100},
    {title:'Cricket tournament ', image: 'assets/cricket.jpg',people: 600},
    {title:'Nav Concert @ bengaluru', image: 'assets/nav.jpg',people: 10000},
    {title:'Wordpress Workshop 1.0', image: 'assets/wordpress.png',people: 800},
    {title:'How To Angular ', image: 'assets/angular.png',people: 20000},
  ]

}
