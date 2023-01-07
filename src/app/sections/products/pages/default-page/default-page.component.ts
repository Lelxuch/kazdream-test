import {Component, OnInit} from '@angular/core';

import {ProductsService} from 'src/app/core/services/products.service';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})
export class DefaultPageComponent implements OnInit {

  inputFilter: string;
  products: any = [];
  filteredProducts: any = [];

  index = 0;
  tabs: string[] = []

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productsService.getProducts()
      .subscribe(res => {
        this.products = res;
      })
  }

  applyFilter() {
    if (!this.inputFilter) {
      this.filteredProducts = [];
      return;
    }
    this.filteredProducts = this.products.filter((product: any, count: number) => {
      if (count < 10) {
        count++;
        return product.title.toLowerCase().includes(this.inputFilter.toLowerCase());
      }
      return false;
    });
  }

  openProduct(item: any) {
    console.log(item);
  }

  closeTab({ index }: { index: number }): void {
    this.tabs.splice(index, 1);
  }

  newTab(): void {
    this.tabs.push('New Tab');
    this.index = this.tabs.length - 1;
  }

}
