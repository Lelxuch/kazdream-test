import {IProduct} from '../../models/product.models';

export class AddProduct {
  static readonly type = '[IProduct] Add';
  constructor(public payload: IProduct) {}
}

export class UpdateProduct {
  static readonly type = '[IProduct] Update';
  constructor(public payload: IProduct, public secId: number | undefined) {
  }
}

export class RemoveProduct {
  static readonly type = '[number] Remove';
  constructor(public payload: number | undefined) {}
}

export class UpdateMaxId {
  static readonly type = '[number] Update';
  constructor(public payload: number) {
  }
}
