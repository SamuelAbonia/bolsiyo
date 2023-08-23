import { InjectRepository } from '@nestjs/typeorm';
import { transformDateToUTC } from '@share/utils';
import { ProductEntity } from 'src/product/domain/product.entity';
import { ProductRepository } from 'src/product/domain/productRepository';

export class ProductReport {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: ProductRepository,
  ) {}

  async report(params: { from?: Date; to?: Date }) {
    const { from, to } = params;

    return await this.productRepository.report({
      where: {
        to: transformDateToUTC(to),
        from: transformDateToUTC(from),
      },
    });
  }
}
