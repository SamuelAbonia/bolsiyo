import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/category/domain/category.entity';
import { CategoryRepository } from 'src/category/domain/categoryRepository';
import { CategoryDto } from 'src/category/domain/Category';
import { plainToClass } from '@nestjs/class-transformer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryFinder {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: CategoryRepository,
  ) {}

  async find(storeId: string): Promise<CategoryDto[]> {
    const result = await this.categoryRepository.findByStore(storeId);
    const formattedResult: CategoryDto[] = result.map((element) =>
      plainToClass(CategoryDto, element),
    );

    return formattedResult;
  }
}
