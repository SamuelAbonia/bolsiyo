import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteCategoryCommand } from './command';
import { CategoryEraser } from './service';

@CommandHandler(DeleteCategoryCommand)
export class DeleteCategoryCommandHandler
  implements ICommandHandler<DeleteCategoryCommand>
{
  constructor(private readonly categoryCreator: CategoryEraser) {}
  async execute(command: DeleteCategoryCommand): Promise<void> {
    const { id } = command;
    await this.categoryCreator.remove(id);
  }
}
