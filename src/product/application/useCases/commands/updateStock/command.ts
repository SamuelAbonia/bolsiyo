export class UpdateStockCommand {
  constructor(
    readonly productId: string,
    readonly units: number,
  ) {}
}
