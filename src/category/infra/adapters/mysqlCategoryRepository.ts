import { Repository } from 'typeorm';
import { CategoryEntity } from 'src/category/domain/category.entity';
import { CategoryRepository } from 'src/category/domain/categoryRepository';
import { CategoryDto } from 'src/category/domain/Category';

export const MysqlCategoryRepository: Pick<CategoryRepository, any> = {
  async findByStore(
    this: Repository<CategoryEntity>,
    storeId: string,
  ): Promise<CategoryEntity[]> {
    const result: CategoryEntity[] = await this.createQueryBuilder('category')
      .innerJoinAndSelect('category.store', 'store')
      .leftJoinAndSelect('category.products', 'products')
      .where('store.id = :storeId', { storeId })
      .getMany();

    return result;
  },

  async create(
    this: Repository<CategoryEntity>,
    category: CategoryDto,
  ): Promise<void> {
    await this.query(`
      INSERT INTO category (id, name, store_id)
      VALUES ("${category.id}", "${category.name}", "${category.storeId}");
    `);
  },
};
