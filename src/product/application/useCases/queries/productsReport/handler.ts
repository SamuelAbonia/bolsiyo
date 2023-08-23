import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ProductsReportQuery } from './query';
import { ProductReport } from './service';

@QueryHandler(ProductsReportQuery)
export class ProductsReportQueryHandler
  implements IQueryHandler<ProductsReportQuery>
{
  constructor(private readonly productReport: ProductReport) {}
  execute(query: ProductsReportQuery): Promise<any> {
    const { from, to } = query.criteria;
    return this.productReport.report({ from, to });
  }
}
