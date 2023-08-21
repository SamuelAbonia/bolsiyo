import { HttpStatus } from '@nestjs/common';

export class PurchasePriceIsLessThanZeroException extends Error {
  readonly status: number = null;
  readonly metaData: object | string = null;
  constructor(message: string, metaData: object | string = null) {
    super(message);
    this.name = 'PruchasePriceIsLessThanZeroException';
    this.status = HttpStatus.BAD_REQUEST;
    this.metaData = metaData;
  }
}
