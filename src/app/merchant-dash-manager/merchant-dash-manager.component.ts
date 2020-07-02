import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../services/user.service';
import { ManagerService} from '../services/manager.service';
import { ClerkService} from '../services/clerk.service';
import {RequestService} from '../services/request.service';
import {User} from '../models/user.model';
import {ProductBatch} from '../models/product.model';
import {Manager} from '../models/manager.model';
import 'chart.piecelabel.js';

@Component({
  selector: 'app-merchant-dash-manager',
  templateUrl: './merchant-dash-manager.component.html',
  styleUrls: ['./merchant-dash-manager.component.css']
})
export class MerchantDashManagerComponent implements OnInit {

  currentUser: User;
  manager: Manager;
  orders :ProductBatch[];
  

  public doughnutChartLabels = ['clothing', 'stationery', 'hardware', 'confectionery'];
  public doughnutChartData = [150000, 350000, 300000, 500000];
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




  // bar
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

  public barChartLabels = ['Jan', 'Feb', 'March', 'April', 'June'];
  
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    { data: [25, 30, 20, 50, 60], label: 'Purchase' },
    { data: [15, 20, 15, 35, 50], label: 'Sales' }
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

 





  // barchat2
  public barItemsOptions = {
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
          labelString: 'Ksh in thousands',
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


  
  public barItemsLabels = ['Bread', 'Milk', 'Cooking oil', 'Maize meal', 'Sugar'];
  
  public barItemsType = 'bar';
  public barItemsLegend = true;

  public barItemsData = [
    { data: [720, 650, 500, 400, 300], label: 'Sales' },
  ];

  public itemsColors: Array<any> = [
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
  public pieChartData = [80 , 20 ];
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

 


  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private merchantService: ManagerService,
    private clerkService: ClerkService,
    private requestService: RequestService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }

}
