import { LoginCommandHandler } from './auth/application/useCases/login/handler';
import { CreateCategoryCommandHandler } from './category/application/useCases/commands/createCategory/handler';
import { DeleteCategoryCommandHandler } from './category/application/useCases/commands/deleteCategory/handler';
import { getByStoreIdQueryHandler } from './category/application/useCases/queries/getByStoreId/handler';
import { CreateProductCommandHandler } from './product/application/useCases/commands/createProduct/handler';
import { DeleteProductCommandQueryHandler } from './product/application/useCases/commands/deleteProduct/handler';
import { UpdateProductCommandHandler } from './product/application/useCases/commands/updateProduct/handler';
import { UpdateStockCommandHandler } from './product/application/useCases/commands/updateStock/handler';
import { FindProductsByCriteriaQueryHandler } from './product/application/useCases/queries/findProduct/handler';
import { ProductsReportQueryHandler } from './product/application/useCases/queries/productsReport/handler';

export const queryHandlers = [
  getByStoreIdQueryHandler,
  CreateCategoryCommandHandler,
  DeleteCategoryCommandHandler,
  CreateProductCommandHandler,
  FindProductsByCriteriaQueryHandler,
  DeleteProductCommandQueryHandler,
  UpdateStockCommandHandler,
  UpdateProductCommandHandler,
  LoginCommandHandler,
  ProductsReportQueryHandler,
];
