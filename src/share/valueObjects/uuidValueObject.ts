import { validate } from 'uuid';
import { InvalidUuidException } from '../errors/invalidUuidException';

export class UuidValueObject {
  readonly value: string;

  constructor(value: string) {
    this.isValidUuid(value);
    this.value = value;
  }

  private isValidUuid(value: string): void {
    if (!validate(value)) {
      throw new InvalidUuidException(`value '${value}' is not a valid id`);
    }
  }
}
