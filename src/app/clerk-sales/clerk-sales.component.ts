import { Component, OnInit } from '@angular/core';
import { ClerkService } from '../services/clerk.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Sales } from '../models/sale.model';
import { UserService } from '../services';

@Component({
  selector: 'app-clerk-sales',
  templateUrl: './clerk-sales.component.html',
  styleUrls: ['./clerk-sales.component.css']
})
export class ClerkSalesComponent implements OnInit {
  salesForm: FormGroup;
  loading = false;  // loader while awaiting response
  submitted = false;
  sales: Sales[]

  constructor(
    private clerkService : ClerkService,
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit(){
    this.buildSales()
    this.getSale()
  }

  buildSales = () => {
    this.salesForm = this.fb.group({
      item: ['', Validators.required],
      quantity: ['', [Validators.required]],
      shop: ['', Validators.required],
      selling_price: ['', Validators.required]
  
  });
}

  get field() {
    return this.salesForm.controls;
  }

  addSale = () => {
    this.submitted = true
    if (this.salesForm.invalid) {
      return ;
    }

    this.loading = true;
    this.salesForm.value.quantity = parseInt(this.salesForm.value.quantity)
    this.salesForm.value.selling_price = parseInt(this.salesForm.value.selling_price)

    console.log("Form - ", this.salesForm.value);
    this.clerkService.postSales(this.salesForm.value)
      .pipe(first())
      .subscribe(
        (data) => {
          console.log("productSalesssssssssss data-", data);
          this.loading = false;
          this.router.navigate(['/clerk-sales']);
        },
        (error) => {
          this.loading = false;
          console.log("Login Error-", error);
        }
      );
  }
    
  getSale(){
    this.clerkService.getSales()
    .subscribe((response:Sales[])=> {
      this.sales = response
   
    })
  }


  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }
}





