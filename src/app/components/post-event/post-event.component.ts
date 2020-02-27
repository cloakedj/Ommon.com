import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-event',
  templateUrl: './post-event.component.html',
  styleUrls: ['./post-event.component.sass']
})
export class PostEventComponent implements OnInit {
  @Input() openState : boolean;
  @Output() closeState = new EventEmitter();
  constructor() { }
  types=[
    {type: 'Competitions', image:'assets/comps.gif'},
    {type: 'Events', image:'assets/events.gif'},
    {type: 'Collabs', image:'assets/collabs.gif'},
  ];
  ngOnInit() {
  }
  closeEventsModal(){
    this.openState = false;
    this.closeState.emit("false");
  }
}
