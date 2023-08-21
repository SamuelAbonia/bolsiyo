import { NumberValueObject } from '@share/valueObjects/numberValueObject';
import { StockIsLessThanZeroException } from '../errors/stockPriceIsLessThanZeroException';

export class Stock extends NumberValueObject {
  readonly value: number;

  constructor(stock: number) {
    super(stock);
  }

  validateNegativeStock(value: number): void {
    if (value < 0) {
      throw new StockIsLessThanZeroException(
        `value '${value}' is less than zero`,
      );
    }
  }
}
