import { plainToClass } from '@nestjs/class-transformer';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDto } from 'src/product/domain/Product';
import { ProductEntity } from 'src/product/domain/product.entity';
import {
  ProductCriteria,
  ProductRepository,
} from 'src/product/domain/productRepository';

@Injectable()
export class ProductFinder {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: ProductRepository,
  ) {}

  async findProductsByCriteria(params: ProductCriteria): Promise<ProductDto[]> {
    const result: ProductEntity[] =
      await this.productRepository.findProductsByCriteria(params);
    const formattedResult: ProductDto[] = result.map((element) =>
      plainToClass(ProductDto, element),
    );

    return formattedResult;
  }
}
