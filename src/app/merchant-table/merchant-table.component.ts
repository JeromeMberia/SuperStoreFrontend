import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MerchantTableDataSource, MerchantTableItem } from './merchant-table-datasource';
import {UserService, MerchantService} from '../services';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-merchant-table',
  templateUrl: './merchant-table.component.html',
  styleUrls: ['./merchant-table.component.css']
})
export class MerchantTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<MerchantTableItem>;
  dataSource: MerchantTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['email', 'name', 'shop'];

  

  ngOnInit() {
    this.dataSource = new MerchantTableDataSource();
  }


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
  ) { }

  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }


}
