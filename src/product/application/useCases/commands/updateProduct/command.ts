export class UpdateProductCommand {
  constructor(
    readonly id: string,
    readonly name?: string,
    readonly salePrice?: number,
    readonly purchasePrice?: number,
    readonly categoryId?: string,
  ) {}
}
