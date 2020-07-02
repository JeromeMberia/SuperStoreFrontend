import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MerchantComponent } from './merchant/merchant.component';
import { ManagerComponent } from './manager/manager.component';
import { ClerkComponent } from './clerk/clerk.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChartsModule } from 'ng2-charts';


import { MerchantManagerComponent } from './merchant-manager/merchant-manager.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ManagerTableComponent } from './manager-table/manager-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ManagerLoginComponent } from './manager-login/manager-login.component';
import { ClerkLoginComponent } from './clerk-login/clerk-login.component';
import { ClerkSalesComponent } from './clerk-sales/clerk-sales.component';
import { ManagerItemComponent } from './manager-item/manager-item.component';
import { OrderEditFormComponent } from './order-edit-form/order-edit-form.component';
import { ClerkOrderComponent } from './clerk-order/clerk-order.component';
import { ItemTableComponent } from './item-table/item-table.component';
import { MerchantTableComponent } from './merchant-table/merchant-table.component';
import { SalesTableComponent } from './sales-table/sales-table.component';
import { MerchantDashManagerComponent } from './merchant-dash-manager/merchant-dash-manager.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    MerchantComponent,
    ManagerComponent,
    ClerkComponent,
    NotFoundComponent,
    MerchantManagerComponent,
    LoginComponent,
    SignupComponent,
    ManagerTableComponent,
    ManagerLoginComponent,
    ClerkLoginComponent,
    ClerkSalesComponent,
    ManagerItemComponent,
    OrderEditFormComponent,
    ClerkOrderComponent,
    ItemTableComponent,
    MerchantTableComponent,
    SalesTableComponent,
    MerchantDashManagerComponent,
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // tslint:disable-next-line: deprecation
    HttpModule,
    HttpClientModule,
    NgxWebstorageModule,
    BrowserAnimationsModule ,
    ReactiveFormsModule,
    MaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
