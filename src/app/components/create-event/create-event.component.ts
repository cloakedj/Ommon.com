import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  signUpForm: FormGroup = this.formBuilder.group({
    title:['',Validators.required],
    description:['',Validators.required],
    startDate:['',[
    Validators.required,
    ]],
    startTime:['',Validators.required],
    endDate:['',Validators.required],
    endTime:['',Validators.required],
    cover: ['',Validators.required]
  });
  back : string;
  constructor(private formBuilder: FormBuilder,
    private router : Router,
    private aroute: ActivatedRoute,
    private cd : ChangeDetectorRef) {
      this.aroute.queryParams.subscribe(params =>{
        this.back = params['image'];
  })
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
  get title(){ return this.signUpForm.get('title');}
  get description(){ return this.signUpForm.get('description');}
  get startDate(){ return this.signUpForm.get('startDate');}
  get startTime(){ return this.signUpForm.get("startTime");}
  get endDate(){ return this.signUpForm.get("endDate");}
  get endTime(){ return this.signUpForm.get("endTime");}
}
