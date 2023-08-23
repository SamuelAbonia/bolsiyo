import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { AuthorizationGuard } from 'src/auth/infra/authorization.guard';
import { CreateProductCommand } from 'src/product/application/useCases/commands/createProduct/command';
import { DeleteProductCommandQuery } from 'src/product/application/useCases/commands/deleteProduct/command';
import { UpdateProductCommand } from 'src/product/application/useCases/commands/updateProduct/command';
import { UpdateStockCommand } from 'src/product/application/useCases/commands/updateStock/command';
import { FindProductsByCriteriaQuery } from 'src/product/application/useCases/queries/findProduct/query';
import { ProductDto } from 'src/product/domain/Product';

@Controller('product')
export class ProductController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('')
  async create(
    @Body()
    body: {
      id: string;
      name: string;
      purchasePrice: number;
      salePrice: number;
      stock: number;
      categoryId: string;
    },
  ) {
    const { id, name, purchasePrice, salePrice, stock, categoryId } = body;
    const command = new CreateProductCommand(
      id,
      name,
      purchasePrice,
      salePrice,
      stock,
      categoryId,
    );

    return this.commandBus.execute(command);
  }

  @Get('')
  @UseGuards(AuthorizationGuard)
  async findProductsByCriteria(@Query() params: any): Promise<ProductDto[]> {
    const query = new FindProductsByCriteriaQuery({
      name: params?.name,
      store: params.store,
    });

    return this.queryBus.execute(query);
  }

  @Delete('')
  async deleteProduct(@Query('id') id: string): Promise<string> {
    const command = new DeleteProductCommandQuery(id);

    return this.commandBus.execute(command);
  }

  @Put('stock')
  async updateStock(@Body() body: any): Promise<ProductDto> {
    const { productId, units } = body;
    const command = new UpdateStockCommand(productId, units);

    return this.commandBus.execute(command);
  }

  @Put('')
  async updateProduct(@Body() body: any): Promise<ProductDto> {
    const { id, name, purchasePrice, salePrice, categoryId } = body;

    const command = new UpdateProductCommand(
      id,
      name,
      salePrice,
      purchasePrice,
      categoryId,
    );

    return this.commandBus.execute(command);
  }
}
