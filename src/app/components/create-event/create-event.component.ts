import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.sass']
})
export class CreateEventComponent implements OnInit {
  image : any;
  eventData = new FormData();
  @Input() timepicker : any;
  addEvent: FormGroup = this.formBuilder.group({
    event:['',Validators.required],
    info:['',Validators.required],
    date:['',[
    Validators.required,
    ]],
    time:['',Validators.required],
    status:['',Validators.required],
    venue:['',Validators.required],
    tags: ['',Validators.required]
  });
  back : string;
  constructor(private formBuilder: FormBuilder,
    private router : Router,
    private aroute: ActivatedRoute,
    private cd : ChangeDetectorRef) {
  }
  onSubmit(data){
    data.cover = this.image;
    this.eventData = data;
    console.log(this.eventData);
  }
  uploadFile(event) {
    for (let index = 0; index < event.target.files.length; index++) {
    const element = event.target.files[index];
    const reader = new FileReader();
        reader.readAsDataURL(event.target.files[index]);
        reader.onload = () => { 
          this.image = reader.result;
          this.cd.markForCheck();
        };
      }
    } 

  ngOnInit() {
  }
  get event(){ return this.addEvent.get('event');}
  get info(){ return this.addEvent.get('info');}
  get date(){ return this.addEvent.get('date');}
  get time(){ return this.addEvent.get("time");}
  get status(){ return this.addEvent.get("status");}
  get venue(){ return this.addEvent.get("venue");}
  get tags(){ return this.addEvent.get("tags");}
}
