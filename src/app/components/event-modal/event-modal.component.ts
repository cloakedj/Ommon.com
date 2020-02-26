import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.sass']
})
export class EventModalComponent implements OnInit {
  @Input() Event : any;
  @Input() showStatus : boolean;
  @Output() toggle  = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  updateParent(state : boolean){
    this.toggle.emit(state);
  }

}
