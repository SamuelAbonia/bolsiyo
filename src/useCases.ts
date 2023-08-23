import { ApiLogin } from './auth/application/useCases/login/service';
import { CategoryCreator } from './category/application/useCases/commands/createCategory/service';
import { CategoryEraser } from './category/application/useCases/commands/deleteCategory/service';
import { CategoryFinder } from './category/application/useCases/queries/getByStoreId/service';
import { ProductCreator } from './product/application/useCases/commands/createProduct/service';
import { ProductEraser } from './product/application/useCases/commands/deleteProduct/service';
import { ProductUpdater } from './product/application/useCases/commands/updateProduct/service';
import { StockUpdater } from './product/application/useCases/commands/updateStock/service';
import { ProductFinder } from './product/application/useCases/queries/findProduct/service';
import { ProductReport } from './product/application/useCases/queries/productsReport/service';

export const useCases = [
  CategoryFinder,
  CategoryCreator,
  CategoryEraser,
  ProductCreator,
  ProductFinder,
  ProductEraser,
  StockUpdater,
  ProductUpdater,
  ApiLogin,
  ProductReport,
];
