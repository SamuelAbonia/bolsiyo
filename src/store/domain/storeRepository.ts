import { Repository } from 'typeorm';
import { StoreEntity } from './store.entity';

export interface StoreRepository extends Repository<StoreEntity> {
  this: Repository<StoreEntity>;
  findById(storeId: string): Promise<StoreEntity>;
}
