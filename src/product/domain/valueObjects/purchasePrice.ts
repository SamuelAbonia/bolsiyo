import { NumberValueObject } from '@share/valueObjects/numberValueObject';
import { PurchasePriceIsLessThanZeroException } from '../errors/purchasePriceIsLessThanZeroException';

export class PurchasePrice extends NumberValueObject {
  readonly value: number;

  constructor(purchasePrice: number) {
    super(purchasePrice);
    this.validatePositivePrice(purchasePrice);
    this.value = purchasePrice;
  }

  validatePositivePrice(value: number): void {
    if (value < 0) {
      throw new PurchasePriceIsLessThanZeroException(
        `value '${value}' is less than zero`,
      );
    }
  }
}
