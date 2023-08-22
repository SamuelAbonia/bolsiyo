import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateProductCommand } from './command';
import { ProductUpdater } from './service';

@CommandHandler(UpdateProductCommand)
export class UpdateProductCommandHandler
  implements ICommandHandler<UpdateProductCommand>
{
  constructor(private readonly productUpdater: ProductUpdater) {}
  execute(command: UpdateProductCommand): Promise<any> {
    return this.productUpdater.updateProduct(command);
  }
}
