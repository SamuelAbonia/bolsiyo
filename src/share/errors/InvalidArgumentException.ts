import { HttpStatus } from '@nestjs/common';

export class InvalidArgumentException extends Error {
  readonly status: number | null = null;
  readonly metaData: object | string | null = null;
  constructor(message: string, metaData: object | string | null = null) {
    super(message);
    this.name = 'InvalidArgumentException';
    this.status = HttpStatus.BAD_REQUEST;
    this.metaData = metaData;
  }
}
