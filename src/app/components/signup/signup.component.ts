import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { ToastrService } from 'ngx-toastr';
import { Observer } from 'rxjs';
import { ApiService } from 'src/app/services/api-service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  toggleMessageCard : boolean = true;
  createUserObs$ : Observer<any>;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  image : any;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
    tagsArr = [];
    signUpData = [];
  signUpForm : FormGroup  = this._fb.group({
    name : ['',[
      Validators.required,
      Validators.maxLength(30)
    ]],
   username : ['',[
      Validators.required,
    ]],
    email : ['',[
      Validators.email,
      Validators.required
    ]],
    password : ['',[Validators.required]],
    institution : ['', [Validators.required]],
    course : ['',[
      Validators.required,
      Validators.pattern(/^[A-Za-z]+$/)
    ]],
    interests : ['',Validators.required],
    policyAgreement : ['',
    [Validators.requiredTrue],
  ],
    logo : [null]
  });
  constructor(private _fb : FormBuilder,
    private toastr : ToastrService,
    private api : ApiService,
    private router : Router,
    private cd :ChangeDetectorRef)  {  
  }

  ngOnInit() {
   
  }
  get name(){ return this.signUpForm.get("name")};
  get username(){ return this.signUpForm.get("username")};
  get email(){ return this.signUpForm.get("email")};
  get password(){ return this.signUpForm.get("password")};
  get institution(){ return this.signUpForm.get("institution")};
  get course(){ return this.signUpForm.get("course")};
  get interests(){ return this.signUpForm.get("interests")};
  get policyAgreement(){ return this.signUpForm.get("policyAgreement")};
  onSubmit(){
    this.tagsArr = this.tagsArr.map(el => el.name);
    this.signUpForm.controls['interests'].setValue(this.tagsArr);
    this.signUpData = this.signUpForm.value;
    this.createUserObs$ = {
      next : data => {
        this.toastr.success(data["message"]);
        this.router.navigateByUrl('/login');
      },
      error : err => this.toastr.error(err),
      complete : () => this.toastr.info("Request To Add New User Completed")
    }
    this.api.createNewUser(this.signUpData).subscribe(this.createUserObs$);
    this.signUpForm.reset();
    this.tagsArr = [];
  }
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
  uploadFile(event) {
      this.image = event.target.files[0];
      this.signUpForm.patchValue({
        logo : this.image
      })
    } 
}
