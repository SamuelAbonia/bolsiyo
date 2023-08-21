import { InvalidArgumentException } from '../errors/InvalidArgumentException';

export type Primitives = string | number | boolean | Date;

export abstract class ValueObject<T extends Primitives> {
  protected primitiveValue: T;

  constructor(value: T) {
    this.primitiveValue = value;
    this.ensureValueIsDefined(value);
  }

  private ensureValueIsDefined(value: T): void {
    if (value === null || value === undefined) {
      throw new InvalidArgumentException('Value must be defined');
    }
  }

  toString(): string {
    return this.primitiveValue.toString();
  }
}
