import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-post-event',
  templateUrl: './post-event.component.html',
  styleUrls: ['./post-event.component.sass']
})
export class PostEventComponent implements OnInit {
  @Input() openState : boolean;
  constructor() { }
  types=[
    {type: 'Competitions', image:'assets/comps.gif'},
    {type: 'Events', image:'assets/events.gif'},
    {type: 'Collabs', image:'assets/collabs.gif'},
  ];
  ngOnInit() {
  }
  closeEventModal(){
    this.openState = false;
  }
}
