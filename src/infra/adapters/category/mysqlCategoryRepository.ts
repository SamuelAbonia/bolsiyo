import { Category } from '@domain/entities/category/Category';
import { CategoryRepository } from 'infra/ports/category/categoryRepository';

export class MysqlCategoryRepository implements CategoryRepository {
  save(category: Category): Promise<void> {
    throw new Error('Method not implemented.');
  }
  delete(categoryId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findByStore(storeId: string): Promise<Category[]> {
    throw new Error('Method not implemented.');
  }
}
