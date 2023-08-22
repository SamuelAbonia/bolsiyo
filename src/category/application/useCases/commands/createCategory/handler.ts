import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateCategoryCommand } from './command';
import { CategoryCreator } from './service';

@CommandHandler(CreateCategoryCommand)
export class CreateCategoryCommandHandler
  implements ICommandHandler<CreateCategoryCommand>
{
  constructor(private readonly categoryCreator: CategoryCreator) {}
  async execute(command: CreateCategoryCommand): Promise<void> {
    const { id, name, storeId } = command;
    await this.categoryCreator.create({ id, name, storeId });
  }
}
