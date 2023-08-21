import { Store } from '@domain/entities/store/Store';

export interface StoreRepository {
  save(store: Store): Promise<void>;

  findById(storeId: string): Promise<Store>;
}
