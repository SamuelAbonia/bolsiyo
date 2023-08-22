import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteProductCommandQuery } from './command';
import { ProductEraser } from './service';

@CommandHandler(DeleteProductCommandQuery)
export class DeleteProductCommandQueryHandler
  implements ICommandHandler<DeleteProductCommandQuery>
{
  constructor(private readonly productEraser: ProductEraser) {}
  execute(command: DeleteProductCommandQuery): Promise<void> {
    const { id } = command;
    return this.productEraser.remove(id);
  }
}
