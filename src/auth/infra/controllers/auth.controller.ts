import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { Public } from '@share/decorators/public.decorator';
import { LoginCommand } from 'src/auth/application/useCases/login/command';

@Controller('auth')
export class AuthController {
  constructor(readonly commandBus: CommandBus) {}

  @Public()
  @Post('login')
  async login(@Body() body: any) {
    const { user, password } = body;
    const command = new LoginCommand(user, password);

    return this.commandBus.execute(command);
  }
}
