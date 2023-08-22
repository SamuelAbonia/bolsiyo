import { Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { CategoryDto } from './Category';

export interface CategoryRepository extends Repository<CategoryEntity> {
  this: Repository<CategoryEntity>;
  findByStore(storeId: string): Promise<CategoryEntity[]>;
  createCategory(categoryDto: CategoryDto): Promise<void>;
}
