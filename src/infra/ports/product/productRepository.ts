import { Product } from '@domain/entities/product/Product';

export interface ProductCriteria {
  where: {
    store: string;
    name?: string;
  };
}

export interface ProductRepository {
  saveOrUpdate(product: Product): Promise<void>;

  delete(productId: string): Promise<void>;

  updateStock(product: Product, stock: number): Promise<void>;

  findProductsByCriteria(criteia: ProductCriteria): Promise<Product[]>;
}
