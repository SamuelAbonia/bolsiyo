import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { FindProductsByCriteriaQuery } from './query';
import { ProductFinder } from './service';
import { ProductDto } from 'src/product/domain/Product';

@QueryHandler(FindProductsByCriteriaQuery)
export class FindProductsByCriteriaQueryHandler
  implements IQueryHandler<FindProductsByCriteriaQuery>
{
  constructor(private readonly productFinder: ProductFinder) {}
  async execute(query: FindProductsByCriteriaQuery): Promise<ProductDto[]> {
    const { name, store } = query.criteria;
    const result: ProductDto[] =
      await this.productFinder.findProductsByCriteria({
        where: {
          name,
          store,
        },
      });
    return result;
  }
}
