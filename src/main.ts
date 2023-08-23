import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthorizationGuard } from './auth/infra/authorization.guard';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const reflector = app.get(Reflector);
  app.useGlobalGuards(new AuthorizationGuard(reflector));
  await app.listen(3000);
}
bootstrap();
