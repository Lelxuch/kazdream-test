import {Component, OnInit} from '@angular/core';
import {Observable, pipe} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {Select, Store} from '@ngxs/store';

import {ProductsService} from 'src/app/core/services/products.service';
import {IProduct} from 'src/app/core/models/product.models';
import {AddProduct, RemoveProduct, UpdateMaxId, UpdateProduct} from 'src/app/core/store/actions/product.action';
import {ProductState} from 'src/app/core/store/state/product.state';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent implements OnInit {

  inputFilter: string;
  productsData: IProduct[];
  productsLoading: boolean = true;
  filteredProducts: IProduct[];

  currentTab = 0;
  @Select(ProductState.getProducts) products$: Observable<IProduct[]>;
  @Select(ProductState.getMaxId) maxId$: Observable<number>;
  tabs: string[] = []

  constructor(
    private productsService: ProductsService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.productsService.getProducts()
      .subscribe((res: any) => {
        this.productsData = res;
        this.productsLoading = false;
        this.newTab()
      })
  }

  applyFilter(): void {
    if (!this.inputFilter) {
      this.filteredProducts = [];
      return;
    }
    this.filteredProducts = this.productsData.filter((product: any, count: number) => {
      if (count < 10) {
        count++;
        return product.title.toLowerCase().includes(this.inputFilter.toLowerCase());
      }
      return false;
    });
  }

  openProduct(index: number, product: IProduct): void {
    let products: IProduct[] = [];
    this.products$.pipe(tap(res => products = res)).subscribe();
    this.store.dispatch(new UpdateProduct(product, products[index].secId))
      .subscribe(res => {
        console.log(res);
      })
    this.filteredProducts = []
    this.inputFilter = "";
  }

  newTab(): void {
    let maxId = 0;
    this.maxId$.pipe(tap(res => maxId = res - 1)).subscribe();
    const newTab: IProduct = {
      id: -1,
      title: "New tab",
      price: 0,
      description: "",
      category: "",
      image: "",
      rating: {
        rate: 0,
        count: 0,
      },
      secId: maxId
    }
    this.store.dispatch(new AddProduct(newTab))
      .subscribe(res => {
        console.log(res);
        this.store.dispatch(new UpdateMaxId(maxId))
      })
    this.currentTab = this.tabs.length - 1;
  }

  closeTab({ index }: { index: number }): void {
    let products: IProduct[] = [];
    this.products$.pipe(tap(res => products = res)).subscribe();
    this.store.dispatch(new RemoveProduct(products[index].secId))
  }

  openTab(index: number): void {
    if (index != this.currentTab)
      this.inputFilter = "";
  }

}
