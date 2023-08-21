import { NumberValueObject } from 'src/domain/share/valueObjects/numberValueObject';
import { SalePriceIsLessThanZeroException } from '../errors/SalePriceIsLessThanZeroException';

export class SalePrice extends NumberValueObject {
  readonly value: number;

  constructor(salePrice: number) {
    super(salePrice);
  }

  validatePositivePrice(value: number): void {
    if (value < 0) {
      throw new SalePriceIsLessThanZeroException(
        `value '${value}' is less than zero`,
      );
    }
  }
}
