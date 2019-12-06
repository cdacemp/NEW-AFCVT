import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private loginform: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = this.loginform.group({
      email: ['',[ Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get fval() { return this.loginForm.controls; }

  onFormSubmit(){
    console.log("clicked");
    
    this.submitted = true;

    if(this.loginForm.invalid){
      return;
    }
    this.router.navigate(["dashboard"]);
    alert("Success"+ JSON.stringify(this.loginForm.value))
  }

 

}
