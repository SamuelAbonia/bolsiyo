import { Product, ProductDto } from 'src/product/domain/Product';
import { ProductEntity } from 'src/product/domain/product.entity';
import {
  ProductCriteria,
  ProductRepository,
} from 'src/product/domain/productRepository';
import { Repository } from 'typeorm';

export const MysqlProductRepository: Pick<ProductRepository, any> = {
  async saveOrUpdate(
    this: Repository<ProductEntity>,
    product: ProductDto,
  ): Promise<void> {
    await this.query(`
      INSERT INTO product (id, name, purchase_price, sale_price, stock, category_id)
      VALUES ("${product.id}", "${product.name}", ${product.purchasePrice}, ${product.salePrice}, ${product.stock}, "${product.categoryId}");
    `);
  },

  findProductsByCriteria(
    this: Repository<ProductEntity>,
    criteria: ProductCriteria,
  ): Promise<ProductEntity[]> {
    const query = this.createQueryBuilder('product')
      .innerJoinAndSelect('product.category', 'category')
      .innerJoinAndSelect('category.store', 'store')
      .where('store.id = :store', { store: criteria.where.store });

    if (criteria.where.name) {
      query.andWhere('lower(product.name) = :name', {
        name: criteria.where.name.toLowerCase(),
      });
    }

    return query.getMany();
  },

  async removeById(
    this: Repository<ProductEntity>,
    productId: string,
  ): Promise<string> {
    const record = await this.findOneBy({ id: productId });
    const date = new Date();
    await this.save({ ...record, deletedAt: date });
    return productId;
  },
};
