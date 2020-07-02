import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService, MerchantService} from '../services';
import { User } from '../models/user.model';
import { Merchant } from '../models/merchant.model';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {
  currentUser: User;
  merchant: Merchant;

  // p1
  public barChartLabels = ['Jan', 'Feb', 'March', 'April', 'June'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    { data: [15, 30, 40, 50, 70], label: 'Westlands' },
    { data: [20, 40, 50, 60, 80], label: 'Thika Road' },
    { data: [20, 40, 50, 60, 80], label: 'CBD' }
  ];



  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
    labels: {
    fontSize:25
  }
},

    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Ksh in millions',
          fontSize: 20,
        },
          ticks: {
            beginAtZero: true
          }
      }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Month',
        fontSize: 20
      }
    }],
    
  }
  };




  // p
 
  public barChartLabels2 = ['Jan', 'Feb', 'March', 'April', 'June'];
  public barChartType2 = 'bar';
  public barChartLegend2 = true;

  public barChartData2 = [
    { data: [20, 35, 60, 20, 55], label: 'Westlands' },
    { data: [20, 35, 70, 30, 20], label: 'Thika Road' },
    { data: [10, 60, 40, 40, 10], label: 'CBD' }
  ];


 
  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(219, 0, 0, 0.1)',
       
      ],
      hoverBackgroundColor: [
        'rgba(219, 0, 0, 0.2)',
      
      ],
      borderWidth: 2,
    }
  ];


    // pie
    public pieChartLabels = ['paid', 'unpaid'];
    public pieChartData = [65 , 35 ];
    public pieChartType = 'pie';
  
    public pieChartColors: Array<any> = [
      {
        backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
        hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
        borderWidth: 2,
      }
    ];
  
  
    public pieChartOptions = {
      legend: {
        labels: {
        fontSize:22
      }
    },
    scaleLabel: {
      display: true,
      labelString: 'in thousands ',
      fontSize: 20,
    },
   
    }



  public doughnutChartLabels = ['clothing', 'stationery', 'hardware', 'confectionery'];
  public doughnutChartData = [450000, 150000, 120000, 340000];
  public doughnutChartType = 'doughnut';

  public doughnutChartOptions = {
    legend: {
      labels: {
      fontSize:22
    }
  },
  scaleLabel: {
    display: true,
    labelString: 'in thousands ',
    fontSize: 20,
  },
 
  }



  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private merchantService: MerchantService,
 
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }


}

