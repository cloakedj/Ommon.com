import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observer } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.sass']
})
export class LoginComponentComponent implements OnInit {
  loginForm : FormGroup = this._fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  });
  loginObs$: Observer<any>;
  constructor(
    private api : ApiService,
    private _fb : FormBuilder,
    private router : Router,
    private toastr : ToastrService
  ) { }

  ngOnInit() {
  }

  login(data : any){
    this.loginObs$ = {
      next: data => {
        let user = data["user"];
        localStorage.setItem("user",user._id);
        this.router.navigate(['/User']);
      },
      error: err => this.toastr.error(err),
      complete : () => this.toastr.success("Request To Login Completed")
    }
    this.api.loginUserToApp(data).subscribe(this.loginObs$);
  }
  get username(){ return this.loginForm.get("username")};
  get password(){ return this.loginForm.get("password")};

}
