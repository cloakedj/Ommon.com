import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  toggleMessageCard : boolean = true;
  signUpForm : FormGroup  = this._fb.group({
    name : ['',[
      Validators.required,
      Validators.maxLength(30)
    ]],
    pNumber : ['',[
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(/^[0-9]+$/)
    ]],
    email : ['',[
      Validators.email,
      Validators.required
    ]],
    dob : ['',[Validators.required]],
    collegeName : ['', [Validators.required,
    Validators.pattern(/^[A-Za-z]+$/)]],
    courseName : ['',[
      Validators.required,
      Validators.pattern(/^[A-Za-z]+$/)
    ]],
    policyAgreement : ['',
    [Validators.requiredTrue]
  ]
  });
  constructor(private _fb : FormBuilder) {  
  }

  ngOnInit() {
   
  }
  uploadStudentInformation(data : any){

  }
  get name(){ return this.signUpForm.get("name")};
  get pNumber(){ return this.signUpForm.get("pNumber")};
  get email(){ return this.signUpForm.get("email")};
  get dob(){ return this.signUpForm.get("dob")};
  get collegeName(){ return this.signUpForm.get("collegeName")};
  get courseName(){ return this.signUpForm.get("courseName")};
  get policyAgreement(){ return this.signUpForm.get("policyAgreement")};
}
