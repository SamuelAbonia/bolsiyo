import { StoreEntity } from 'src/store/domain/store.entity';
import { StoreRepository } from 'src/store/domain/storeRepository';
import { Repository } from 'typeorm';

export const MySqlStoreRepository: Pick<StoreRepository, any> = {
  async findById(
    this: Repository<StoreEntity>,
    storeId: string,
  ): Promise<StoreEntity> {
    return this.findOne({ where: { id: storeId } });
  },
};
