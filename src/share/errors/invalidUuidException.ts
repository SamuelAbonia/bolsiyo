import { HttpStatus } from '@nestjs/common';

export class InvalidUuidException extends Error {
  readonly status: number | null = null;
  readonly metaData: object | string | null = null;
  constructor(message: string, metaData: object | string | null = null) {
    super(message);
    this.name = 'InvalidUuidException';
    this.status = HttpStatus.BAD_REQUEST;
    this.metaData = metaData;
  }
}
