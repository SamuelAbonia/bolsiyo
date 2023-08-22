export class CreateProductCommand {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly purchasePrice: number,
    public readonly salePrice: number,
    public readonly stock: number,
    public readonly categoryId: string,
  ) {}
}
