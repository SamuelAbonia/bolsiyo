import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/product/domain/product.entity';
import { ProductRepository } from 'src/product/domain/productRepository';

@Injectable()
export class ProductEraser {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: ProductRepository,
  ) {}

  async remove(productId: string): Promise<void> {
    await this.productRepository.removeById(productId);
  }
}
