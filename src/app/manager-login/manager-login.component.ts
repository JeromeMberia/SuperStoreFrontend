import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Errors } from '../models/errors.model';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css']
})
export class ManagerLoginComponent implements OnInit {

  authType: String = '';
  title: String = '';
  isSubmitting: boolean = false;
  authForm: FormGroup;
  errors: Errors = {errors: {}};
  

  hide = true

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    this.authForm = this.fb.group({
      'email': ['', Validators.required ],
      'password': ['', Validators.required ]
    });
   }

   ngOnInit(){
     this.route.url.subscribe(data => {

       this.authType = data[data.length - 1].path;
       this.title = (this.authType === 'manager-login') ? 'Sign in' : 'Sign Up';
       if (this.authType === 'manager-register') {
         this.authForm.addControl('username', new FormControl('', Validators.required));
         this.authForm.addControl('first_name', new FormControl('', Validators.required));
         this.authForm.addControl('last_name', new FormControl('', Validators.required));
         this.authForm.addControl('shop', new FormControl('', Validators.required));
       }
     });

   }

  submitForm() {
    this.isSubmitting = true;
    this.errors = {errors: {}};
    const credentials =  this.authForm.value ;

    console.log(credentials)
    this.userService.attemptRegisterManager(this.authType,credentials)
    .subscribe(
      data => this.router.navigateByUrl('/manager-login')
    )
    this.userService.attemptManager(this.authType, credentials)
    .subscribe(
      data => this.router.navigateByUrl('/manager'),
      err => {
        this.errors = err;
        this.isSubmitting = false;
      }
    );

  }
}

