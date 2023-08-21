import { CategoryId } from '../category/valueObjects/categoryId';
import { ProductId } from './valueObjects/productId';
import { ProductName } from './valueObjects/productName';
import { PurchasePrice } from './valueObjects/purchasePrice';
import { SalePrice } from './valueObjects/salePrice';

interface ProductDto {
  id: string;
  name: string;
  purchasePrice: number;
  salePrice: number;
  categoryId: string;
}

export class Product {
  private id: ProductId;
  private name: ProductName;
  private purchasePrice: PurchasePrice;
  private salePrice: SalePrice;
  private categoryId: CategoryId;

  constructor(params: {
    id: string;
    name: string;
    purchasePrice: number;
    salePrice: number;
    categoryId: string;
  }) {
    const { id, name, purchasePrice, salePrice, categoryId } = params;

    this.id = new ProductId(id);
    this.name = new ProductName(name);
    this.purchasePrice = new PurchasePrice(purchasePrice);
    this.salePrice = new SalePrice(salePrice);
    this.categoryId = new CategoryId(categoryId);
  }

  toDto(): ProductDto {
    return {
      id: this.id.value,
      name: this.name.value,
      purchasePrice: this.purchasePrice.value,
      salePrice: this.salePrice.value,
      categoryId: this.categoryId.value,
    };
  }
}
