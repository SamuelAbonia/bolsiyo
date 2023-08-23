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
    const { from, name, store, to } = criteria.where;
    const query = this.createQueryBuilder('product')
      .innerJoinAndSelect('product.category', 'category')
      .innerJoinAndSelect('category.store', 'store');

    if (store) {
      query.where('store.id = :store', { store });
    }

    if (name) {
      query.andWhere('lower(product.name) = :name', {
        name: name.toLowerCase(),
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

  async report(this: Repository<ProductEntity>, criteria: ProductCriteria) {
    const { from, to } = criteria.where;
    return this.query(`
    SELECT 
      c.id as categoryId, 
      c.name as categoryName, 
      p.id as productId, 
      p.name as productName, 
      p.stock as stock,
      p.updated_at as updatedAt
    FROM 
      Product p 
      INNER JOIN Category c ON p.category_id = c.id 
    WHERE 
      p.updated_at >= '${from.toISOString()}' 
      AND p.updated_at <= '${to.toISOString()}';
    `);
  },
};
