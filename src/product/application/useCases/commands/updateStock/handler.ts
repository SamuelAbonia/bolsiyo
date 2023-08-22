import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateStockCommand } from './command';
import { StockUpdater } from './service';

@CommandHandler(UpdateStockCommand)
export class UpdateStockCommandHandler
  implements ICommandHandler<UpdateStockCommand>
{
  constructor(private readonly stockUpdater: StockUpdater) {}
  execute(command: UpdateStockCommand): Promise<any> {
    const { productId, units } = command;
    return this.stockUpdater.updateStock(productId, units);
  }
}
