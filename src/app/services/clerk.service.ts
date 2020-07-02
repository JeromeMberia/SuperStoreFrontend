import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { ProductBatch } from '../models/product.model';
import { Sales } from '../models/sale.model';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClerkService {

  constructor(
  private apiService: ApiService,
  private http: HttpClient,
 ){}

 private httpOptions = {  headers: new HttpHeaders({'Content-Type': 'application/json'})}

    postProductBatch(batch:ProductBatch):Observable<ProductBatch> {
      const route = '/api/product-batch/'
      return this.apiService.post('' + route, batch)
        .pipe(
          map(
            data => {
              return data;
            }
          )
        );
    }
  


  getProductBatch():Observable<ProductBatch[]> {
    const route = '/api/product-batch/'
    return this.apiService.get('' + route)
      .pipe(
        map(
          data => {
            return data;
          }
        )
      );
  }


  getProductById(id):Observable<ProductBatch> {
    const route = '/api/product-batch/' + id + '/'
    return this.apiService.get('' + route)
      .pipe(
        map(
          data => {
            return data;
          }
        )
      );
  }



  updateProductBatch(batch:ProductBatch, id ):Observable<ProductBatch> {
    const route = '/api/product-batch/' + id + '/'
    return this.apiService.put('' + route, batch)
      .pipe(
        map(
          data => {
            return data;
          }
        )
      );
  }


postSales(sales:Sales):Observable<Sales> {
  const route = '/api/sales/'
  console.log(sales)
  return this.apiService.post('' + route, sales)
    .pipe(
      map(
        data => {
          return data;
        }
      )
    );
}




getSales():Observable<Sales[]> {
  const route = '/api/sales/'
  return this.apiService.get('' + route)
    .pipe(
      map(
        data => {
          return data;
        }
      )
    );
      }
    }
