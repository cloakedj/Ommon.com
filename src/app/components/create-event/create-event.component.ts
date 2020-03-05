import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { Observer } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api-service/api.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.sass']
})
export class CreateEventComponent implements OnInit {
  image : any;
  postEventObs$ : Observer<any>;
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
    tags: ['',Validators.required],
    cover : [null]
  });
  back : string;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
    tagsArr = [];
  constructor(private formBuilder: FormBuilder,
    private router : Router,
    private aroute: ActivatedRoute,
    private cd : ChangeDetectorRef,
    private toastr : ToastrService,
    private api :ApiService) {
  }
  onSubmit(){
    this.tagsArr = this.tagsArr.map(el => el.name);
    this.addEvent.controls['tags'].setValue(this.tagsArr);
    this.eventData = this.addEvent.value;
    this.postEventObs$ = {
      next : data => this.toastr.success(data),
      error : err => this.toastr.error(err),
      complete : () => this.toastr.info("Request To Add New Competition Completed")
    }
    this.api.postNewEvent(this.eventData).subscribe(this.postEventObs$);
    this.addEvent.reset();
    this.tagsArr = [];
  }
  uploadFile(event) {
    let image = event.target.files[0];
    this.addEvent.patchValue({
      cover : image
    })
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
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tagsArr.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag): void {
    const index = this.tagsArr.indexOf(tag);

    if (index >= 0) {
      this.tagsArr.splice(index, 1);
    }
  }
}
