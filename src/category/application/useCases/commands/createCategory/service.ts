import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category, CategoryDto } from 'src/category/domain/Category';
import { CategoryEntity } from 'src/category/domain/category.entity';
import { CategoryRepository } from 'src/category/domain/categoryRepository';

@Injectable()
export class CategoryCreator {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async create(categoryDto: {
    id: string;
    name: string;
    storeId: string;
  }): Promise<void> {
    const { id, name, storeId } = categoryDto;

    const category = new Category({ id, name, storeId });

    await this.categoryRepository.create(category.toDto());
  }
}
