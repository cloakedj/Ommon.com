import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-post-event',
  templateUrl: './post-event.component.html',
  styleUrls: ['./post-event.component.sass']
})
export class PostEventComponent implements OnInit {
  @Input() openState : boolean;
  @Output() closeState  = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  closeEventModal(){
    this.closeState.emit("false");
  }
}
