import { NumberValueObject } from '@share/valueObjects/numberValueObject';
import { NegativesUnitsException } from '../errors/negativeUntisException';

export class ProductLogsUnits extends NumberValueObject {
  readonly value: number;

  constructor(units: number) {
    super(units);
    this.validateNegativeUnits(units);
    this.value = units;
  }

  validateNegativeUnits(value: number): void {
    if (value < 0) {
      throw new NegativesUnitsException(`value '${value}' is less than zero`);
    }
  }
}
