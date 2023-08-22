import { ProductCriteria } from 'src/product/domain/productRepository';

export class FindProductsByCriteriaQuery {
  constructor(readonly criteria: { name?: string; store: string }) {}
}
