import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { Observer } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api-service/api.service';


@Component({
  selector: 'app-add-comp',
  templateUrl: './add-comp.component.html',
  styleUrls: ['./add-comp.component.sass']
})
export class AddCompComponent implements OnInit {
  postCompObs$ : Observer<any>;
  image : any;
  compData = new FormData();
  sponsored = false;
  addComp: FormGroup = this.formBuilder.group({
    comp:['',Validators.required],
    info:['',Validators.required],
    date:[(new Date()).toISOString(),[
    Validators.required,
    ]],
    time:['',Validators.required],
    status:['', Validators.required],
    venue:['',Validators.required],
    tags: [''],
    cover: [null],
    sponsored : ['']
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
    private cd : ChangeDetectorRef,
    private toastr : ToastrService,
    private api: ApiService) {
  }
  onSubmit(){
    this.tagsArr = this.tagsArr.map(el => el.name);
    this.addComp.controls['tags'].setValue(this.tagsArr);
    console.log(this.sponsored);
    this.addComp.controls['sponsored'].setValue(this.sponsored);
    this.compData = this.addComp.value;
    this.postCompObs$ = {
      next : data => this.toastr.success(data["message"]),
      error : err => this.toastr.error(err),
      complete : () => this.toastr.info("Request To Add New Competition Completed")
    }
    this.api.postNewCompetition(this.compData).subscribe(this.postCompObs$);
    this.addComp.reset();
    this.tagsArr = [];
  }
  uploadFile(event) {
    let image = event.target.files[0];
    this.addComp.patchValue({
      cover : image,
    });
    } 

  ngOnInit() {
  }
  get comp(){ return this.addComp.get('comp');}
  get info(){ return this.addComp.get('info');}
  get date(){ return this.addComp.get('date');}
  get time(){ return this.addComp.get("time");}
  get status(){ return this.addComp.get("status");}
  get venue(){ return this.addComp.get("venue");}
  get tags(){ return this.addComp.get("tags");}

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
  getSponsoredValue(){
    this.sponsored = !this.sponsored;
  }

}
