import { HttpStatus } from '@nestjs/common';

export class SalePriceIsLessThanZeroException extends Error {
  readonly status: number = null;
  readonly metaData: object | string = null;
  constructor(message: string, metaData: object | string = null) {
    super(message);
    this.name = 'ProductPriceWithDiscountIsLessThanZeroException';
    this.status = HttpStatus.BAD_REQUEST;
    this.metaData = metaData;
  }
}
