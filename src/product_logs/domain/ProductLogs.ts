import { ProductId } from 'src/product/domain/valueObjects/productId';
import { ProductLogsId } from './valueObjects/ProductLogsId';
import { ProductLogsAction } from './valueObjects/productLogsAction';
import { ProductLogsUnits } from './valueObjects/productLogsUnits';

export class ProductLogsDto {
  id?: string;
  action: string;
  productId: string;
  units: number;
}

export class ProductLogs {
  private id: ProductLogsId;
  private action: ProductLogsAction;
  private productId: ProductId;
  private units: ProductLogsUnits;

  constructor(params: ProductLogsDto) {
    const { id, action, productId, units } = params;

    this.id = new ProductLogsId(id);
    this.action = new ProductLogsAction(action);
    this.productId = new ProductId(productId);
    this.units = new ProductLogsUnits(units);
  }

  toDto(): ProductLogsDto {
    return {
      id: this.id.value,
      action: this.action.value,
      productId: this.productId.value,
      units: this.units.value,
    };
  }
}
