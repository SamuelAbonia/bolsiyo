import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/product/domain/Product';
import { ProductEntity } from 'src/product/domain/product.entity';
import { ProductRepository } from 'src/product/domain/productRepository';

@Injectable()
export class ProductUpdater {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: ProductRepository,
  ) {}

  async updateProduct(params: {
    id: string;
    name?: string;
    salePrice?: number;
    purchasePrice?: number;
    categoryId?: string;
  }): Promise<void> {
    const { id, name, salePrice, purchasePrice, categoryId } = params;
    const productEntity: ProductEntity = await this.productRepository.findOneBy(
      { id },
    );

    if (!productEntity) {
      throw new Error(`The prodct with "${id}" does not exist`);
    }

    const product = new Product({
      id,
      name: name || productEntity.name,
      purchasePrice: purchasePrice || productEntity.purchasePrice,
      salePrice: salePrice || productEntity.salePrice,
      stock: productEntity.stock,
      categoryId: categoryId || productEntity.categoryId,
    });

    const productDto = product.toDto();
    await this.productRepository.save({ ...productDto });
  }
}
