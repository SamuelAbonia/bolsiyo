import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateCategoryCommand } from 'src/category/application/useCases/commands/createCategory/command';
import { DeleteCategoryCommand } from 'src/category/application/useCases/commands/deleteCategory/command';
import { GetByStoreIdQuery } from 'src/category/application/useCases/queries/getByStoreId/query';
import { CategoryDto } from 'src/category/domain/Category';

@Controller('category')
export class CategoryController {
  constructor(
    private queryBus: QueryBus,
    private commandBus: CommandBus,
  ) {}
  @Get()
  async getByStore(@Query('storeId') storeId: string): Promise<CategoryDto[]> {
    const query = new GetByStoreIdQuery(storeId);
    return this.queryBus.execute(query);
  }

  @Post()
  async create(@Body() body: any): Promise<void> {
    const command = new CreateCategoryCommand(body.id, body.name, body.storeId);

    return this.commandBus.execute(command);
  }

  @Delete()
  async delete(@Query('id') id: string) {
    const command = new DeleteCategoryCommand(id);

    return this.commandBus.execute(command);
  }
}
