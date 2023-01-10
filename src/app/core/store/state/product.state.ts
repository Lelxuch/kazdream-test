import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext} from '@ngxs/store';

import {IProduct} from '../../models/product.models';
import {AddProduct, RemoveProduct, UpdateMaxId, UpdateProduct} from '../actions/product.action';

export class ProductStateModel {
  products: IProduct[];
  maxId: number;
}

@State<ProductStateModel>({
  name: 'products',
  defaults: {
    products: [],
    maxId: 0
  }
})
@Injectable()
export class ProductState {
  @Selector()
  static getProducts(state: ProductStateModel): IProduct[] {
    return state.products;
  }

  @Selector()
  static getMaxId(state: ProductStateModel): number {
    return state.maxId;
  }

  @Action(AddProduct)
  addProduct(ctx: StateContext<ProductStateModel>, action: AddProduct) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      products: [...state.products, action.payload]
    });
  }

  @Action(UpdateMaxId)
  updateMaxId(ctx: StateContext<ProductStateModel>, action: UpdateMaxId) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      maxId: action.payload
    });
  }

  @Action(UpdateProduct)
  updateProduct(ctx: StateContext<ProductStateModel>, action: UpdateProduct) {
    const state = ctx.getState();
    const products = [...state.products];
    const product = products.findIndex(item => item.secId === action.secId);
    products[product] = action.payload;
    ctx.setState({
      ...state,
      products: products,
    });
  }


  @Action(RemoveProduct)
  removeProduct(ctx: StateContext<ProductStateModel>, action: RemoveProduct) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      products: state.products.filter(product => product.secId != action.payload)
    });
  }
}
