import { Category } from '@domain/entities/category/Category';

export interface CategoryRepository {
  save(category: Category): Promise<void>;

  delete(categoryId: string): Promise<void>;

  findByStore(storeId: string): Promise<Category[]>;
}
