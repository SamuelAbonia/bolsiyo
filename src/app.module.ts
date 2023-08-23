import path from 'path';
import { Module } from '@nestjs/common';
import {
  TypeOrmModule,
  getDataSourceToken,
  getRepositoryToken,
} from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { config } from '@config';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { StoreEntity } from './store/domain/store.entity';
import { CategoryEntity } from './category/domain/category.entity';
import { MySqlStoreRepository } from './store/infra/adapaters/mysqlStoreRepository';
import { MysqlCategoryRepository } from './category/infra/adapters/mysqlCategoryRepository';
import { CategoryController } from './category/infra/controllers/category.controller';
import { useCases } from './useCases';
import { queryHandlers } from './handlers';
import { ProductEntity } from './product/domain/product.entity';
import { MysqlProductRepository } from './product/infra/adapters/mysqlProductRepository';
import { ProductController } from './product/infra/controllers/product.controller';
import { ProductLogsEntity } from './product_logs/domain/productLogs.entity';
import { MysqlProductLogsRepository } from './product_logs/infra/adapters/mysqlProductLogsRepository';
import { Auth0Provider } from './auth/infra/adapters/Auth0Api';
import { HttpModule, HttpService } from '@nestjs/axios';
import { AuthController } from './auth/infra/controllers/auth.controller';

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
          entities: [path.join(__dirname, '/**/**/*.entity{.ts,.js}')],
        };
      },
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [config],
      isGlobal: true,
      cache: true,
    }),
    TypeOrmModule.forFeature([StoreEntity, CategoryEntity]),
    CqrsModule,
    HttpModule,
  ],
  controllers: [CategoryController, ProductController, AuthController],
  providers: [
    {
      provide: getRepositoryToken(StoreEntity),
      inject: [getDataSourceToken()],
      useFactory(datasource: DataSource) {
        return datasource
          .getRepository(StoreEntity)
          .extend(MySqlStoreRepository);
      },
    },
    {
      provide: getRepositoryToken(CategoryEntity),
      inject: [getDataSourceToken()],
      useFactory(datasource: DataSource) {
        return datasource
          .getRepository(CategoryEntity)
          .extend(MysqlCategoryRepository);
      },
    },
    {
      provide: getRepositoryToken(ProductEntity),
      inject: [getDataSourceToken()],
      useFactory(datasource: DataSource) {
        return datasource
          .getRepository(ProductEntity)
          .extend(MysqlProductRepository);
      },
    },
    {
      provide: getRepositoryToken(ProductLogsEntity),
      inject: [getDataSourceToken()],
      useFactory(datasource: DataSource) {
        return datasource
          .getRepository(ProductLogsEntity)
          .extend(MysqlProductLogsRepository);
      },
    },
    {
      provide: 'AUHT0_PROVIED',
      useFactory: (httpService: HttpService): Auth0Provider => {
        return new Auth0Provider(httpService);
      },
      inject: [HttpService],
    },
    ...useCases,
    ...queryHandlers,
  ],
})
export class AppModule {}
