import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category, CategoryDto } from 'src/category/domain/Category';
import { CategoryEntity } from 'src/category/domain/category.entity';
import { CategoryRepository } from 'src/category/domain/categoryRepository';

@Injectable()
export class CategoryEraser {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async remove(id: string): Promise<void> {
    await this.categoryRepository.delete(id);
  }
}
