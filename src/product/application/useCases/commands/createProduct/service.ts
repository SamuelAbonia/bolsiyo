import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/product/domain/Product';
import { ProductEntity } from 'src/product/domain/product.entity';
import { ProductRepository } from 'src/product/domain/productRepository';

@Injectable()
export class ProductCreator {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: ProductRepository,
  ) {}

  async createOrUpdate(params: {
    id: string;
    name: string;
    purchasePrice: number;
    salePrice: number;
    stock: number;
    categoryId: string;
  }) {
    const product = new Product(params);

    const productDto = product.toDto();

    return this.productRepository.save({
      ...productDto,
    });
  }
}
