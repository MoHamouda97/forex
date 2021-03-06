import { UsersService } from './../../../services/users/users.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as lang from './../../../settings/lang';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  lang: any = lang.ar;
  isSignIn: boolean = false;
  sub: Subscription

  
  constructor(private fb: FormBuilder, private router: Router, private usersService: UsersService) { }

  ngOnInit() : void {
    this.loginForm = this.fb.group({
      mobile: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {    
    this.isSignIn = !this.isSignIn;

    this.usersService.login(this.loginForm.getRawValue()).subscribe(
      (res: any )=> {
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("userid", res.data.userid)
        this.router.navigate(['/users/all'])
      },
      err => this.isSignIn = !this.isSignIn
    ).remove(this.sub)
  }
}
