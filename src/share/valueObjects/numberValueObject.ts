import { ValueObject } from './ValueObject';

export abstract class NumberValueObject extends ValueObject<number> {
  constructor(value: number) {
    super(value);
    this.isNotInfinite(value);
    this.isNotNan(value);
  }

  private isNotInfinite(value: number): void {
    if (value === Infinity || value === -Infinity) {
      throw new Error('Number must be finite');
    }
  }

  private isNotNan(value: number): void {
    if (isNaN(value)) {
      throw new Error('Number must be a number');
    }
  }
}
