import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface SalesTableItem {
  item: string;
  selling_price: number;
  quantity_bought: number;
  clerk: string;

}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: SalesTableItem[] = [
{item: 'Paper', selling_price: 10, quantity_bought: 10, clerk: "Jerome Mberia"},
{item: 'Pens', selling_price: 20, quantity_bought: 5, clerk: "Jerome mberia"},
{item: 'Hammer', selling_price: 100, quantity_bought: 1, clerk: "Jerome mberia"},
{item: 'Dress', selling_price: 1000, quantity_bought: 1, clerk: "Jerome mberia"},
{item: 'Cake', selling_price: 150, quantity_bought: 2, clerk: "Jerome mberia"},
{item: 'Bread', selling_price: 50, quantity_bought: 1, clerk: "Antonio Maina"},
{item: 'Ruler', selling_price: 20, quantity_bought: 1, clerk: "Antonio Maina"},
 
  
];

/**
 * Data source for the SalesTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class SalesTableDataSource extends DataSource<SalesTableItem> {
  data: SalesTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<SalesTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: SalesTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: SalesTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'item': return compare(a.item, b.item, isAsc);
        case 'selling_price': return compare(+a.selling_price, +b.selling_price, isAsc);
        case 'quantity_bought': return compare(a.quantity_bought, b.quantity_bought, isAsc);
        case 'clerk': return compare(+a.clerk, +b.clerk, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
