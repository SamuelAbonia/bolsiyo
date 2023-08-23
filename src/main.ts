import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthorizationGuard } from './auth/infra/authorization.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const reflector = app.get(Reflector);
  app.useGlobalGuards(new AuthorizationGuard(reflector));
  await app.listen(3000);
}
bootstrap();
