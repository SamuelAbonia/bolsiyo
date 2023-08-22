import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateProductCommand } from './command';
import { ProductCreator } from './service';

@CommandHandler(CreateProductCommand)
export class CreateProductCommandHandler
  implements ICommandHandler<CreateProductCommand>
{
  constructor(private readonly productCreator: ProductCreator) {}
  async execute(command: CreateProductCommand): Promise<void> {
    await this.productCreator.createOrUpdate(command);
  }
}
