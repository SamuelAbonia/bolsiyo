import { Repository } from 'typeorm';
import { ProductLogsEntity } from './productLogs.entity';

export interface ProductLogsRepository extends Repository<ProductLogsEntity> {
  this: Repository<ProductLogsEntity>;
}
