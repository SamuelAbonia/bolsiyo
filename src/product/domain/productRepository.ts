import { Repository } from 'typeorm';
import { ProductDto } from './Product';
import { ProductEntity } from './product.entity';

export interface ProductCriteria {
  where: {
    store: string;
    name?: string;
  };
}

export interface ProductRepository extends Repository<ProductEntity> {
  this: Repository<ProductEntity>;
  saveOrUpdate(product: ProductDto): Promise<void>;
  updateStock(productId: string, units: number): Promise<void>;
  findProductsByCriteria(criteia: ProductCriteria): Promise<ProductEntity[]>;
  removeById(productId: string): Promise<string>;
}
