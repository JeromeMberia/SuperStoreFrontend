import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ItemTableItem {
  item: string;
  buying_price: number;
  quantity_bought: number;
  supplier: string;

}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ItemTableItem[] = [
  {item: 'Hammer', buying_price: 500, quantity_bought: 10, supplier: "John's hardware"},
  {item: 'Nails', buying_price: 100, quantity_bought: 200, supplier: "John's hardware"},
  {item: 'Cake', buying_price: 50, quantity_bought: 10, supplier: "Baker mills"},
  {item: 'Dress', buying_price: 250, quantity_bought: 20, supplier: "Fiona designs"},
  {item: 'Skirt', buying_price: 200, quantity_bought: 30, supplier: "Fiona designs"},
  {item: 'Pen', buying_price: 30, quantity_bought: 20, supplier: "Rajid's stationary"},
  {item: 'Pencil', buying_price: 100, quantity_bought: 20, supplier: "Rajid's stationary"},
  {item: 'Paper', buying_price: 100, quantity_bought: 20, supplier: "Rajid's stationary"},
  

];

/**
 * Data source for the ItemTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ItemTableDataSource extends DataSource<ItemTableItem> {
  data: ItemTableItem[] = EXAMPLE_DATA;
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
  connect(): Observable<ItemTableItem[]> {
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
  private getPagedData(data: ItemTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ItemTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'item': return compare(a.item, b.item, isAsc);
        case 'buying_price': return compare(+a.buying_price, +b.buying_price, isAsc);
        case 'quantity_bought': return compare(+a.quantity_bought, +b.quantity_bought, isAsc);
        case 'supplier': return compare(a.supplier, b.supplier, isAsc);
       
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
