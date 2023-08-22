import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetByStoreIdQuery } from './query';
import { CategoryFinder } from './service';
import { CategoryDto } from 'src/category/domain/Category';

@QueryHandler(GetByStoreIdQuery)
export class getByStoreIdQueryHandler
  implements IQueryHandler<GetByStoreIdQuery>
{
  constructor(private categoryFinder: CategoryFinder) {}
  async execute(query: GetByStoreIdQuery): Promise<CategoryDto[]> {
    const { storeId } = query;

    return this.categoryFinder.find(storeId);
  }
}
