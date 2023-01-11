import {Component, Input, OnInit} from '@angular/core';

import {IProduct} from 'src/app/core/models/product.models';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  @Input() product: IProduct;

  shops: number[] = [1, 2, 3];
  ratingCount: number[] = [1, 2, 3];

  constructor() { }

  ngOnInit(): void {
  }

}
