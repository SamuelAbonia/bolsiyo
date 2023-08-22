import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActionTypes } from '@share/constants';
import { Product } from 'src/product/domain/Product';
import { ProductEntity } from 'src/product/domain/product.entity';
import { ProductRepository } from 'src/product/domain/productRepository';
import { ProductLogsEntity } from 'src/product_logs/domain/productLogs.entity';
import { ProductLogsRepository } from 'src/product_logs/domain/productLogsRepository';

@Injectable()
export class StockUpdater {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: ProductRepository,
    @InjectRepository(ProductLogsEntity)
    private readonly productLogsRepository: ProductLogsRepository,
  ) {}

  async updateStock(productId: string, units: number) {
    const productEntity: ProductEntity = await this.productRepository.findOne({
      where: {
        id: productId,
      },
      relations: ['category'],
    });

    const { id, name, purchasePrice, salePrice, stock } = productEntity;

    const product = new Product({
      id,
      name,
      purchasePrice,
      salePrice,
      stock: stock + units,
      categoryId: productEntity.category.id,
    });

    const productDto = product.toDto();

    await this.productRepository.save({
      id: productDto.id,
      name: productDto.name,
      purchasePrice: productDto.purchasePrice,
      salePrice: productDto.salePrice,
      stock: productDto.stock,
      category: productEntity.category,
    });

    const productLogsEntity = new ProductLogsEntity();
    productLogsEntity.action =
      units >= 0 ? ActionTypes.STOCK_INCREASE : ActionTypes.STOCK_DECREASE;
    productLogsEntity.productId = productDto.id;
    productLogsEntity.units = Math.abs(units);

    this.productLogsRepository.save({ ...productLogsEntity });
  }
}
