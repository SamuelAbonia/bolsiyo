import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { LoginCommand } from './command';
import { ApiLogin } from './service';

@CommandHandler(LoginCommand)
export class LoginCommandHandler implements ICommandHandler<LoginCommand> {
  constructor(private apiLogin: ApiLogin) {}
  execute(command: LoginCommand): Promise<any> {
    return this.apiLogin.login(command);
  }
}
