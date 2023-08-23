export class ProductsReportQuery {
  constructor(readonly criteria: { from?: Date; to?: Date }) {}
}
