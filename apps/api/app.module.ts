import path from 'path';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from '@config';
import { ConfigModule, ConfigType } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, host, database, password, port } = configService.mySql;
        return {
          type: 'mysql',
          host,
          port,
          username: user,
          password,
          database,
          synchronize: false,
          autoLoadEntities: false,
          entities: [
            path.join(__dirname, '../../', '/src/domain/**/*.entity{.ts,.js}'),
          ],
        };
      },
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [config],
      isGlobal: true,
      cache: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
