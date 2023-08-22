import { NumberValueObject } from '@share/valueObjects/numberValueObject';
import { SalePriceIsLessThanZeroException } from '../errors/salePriceIsLessThanZeroException';

export class SalePrice extends NumberValueObject {
  readonly value: number;

  constructor(salePrice: number) {
    super(salePrice);
    this.validatePositivePrice(salePrice);
    this.value = salePrice;
  }

  validatePositivePrice(value: number): void {
    if (value < 0) {
      throw new SalePriceIsLessThanZeroException(
        `value '${value}' is less than zero`,
      );
    }
  }
}
