import { ValueObject } from './ValueObject';

export abstract class StringValueObject extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.primitiveValue = this.sanitizeXSS(this.primitiveValue);
    this.primitiveValue = this.sanitizeSQLInj(this.primitiveValue);
  }

  get value(): string {
    return this.primitiveValue;
  }

  private sanitizeXSS(value: string): string {
    return value.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  private sanitizeSQLInj(value: string): string {
    const sqlInjRegex = new RegExp(
      "(%27)|(')|(--)|(%23)|(#)|(%)|(%3B)|(;)|(%3D)|(=)",
    );
    return value.replace(sqlInjRegex, '');
  }
}
