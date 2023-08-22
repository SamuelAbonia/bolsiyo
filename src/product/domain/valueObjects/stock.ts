import { NumberValueObject } from '@share/valueObjects/numberValueObject';
import { StockIsLessThanZeroException } from '../errors/stockPriceIsLessThanZeroException';

export class Stock extends NumberValueObject {
  readonly value: number;

  constructor(stock: number) {
    super(stock);
    this.validateNegativeStock(stock);
    this.value = stock;
  }

  validateNegativeStock(value: number): void {
    if (value < 0) {
      throw new StockIsLessThanZeroException(
        `value '${value}' is less than zero`,
      );
    }
  }
}
