import { StoreId } from './valueObjects/storeId';
import { StoreName } from './valueObjects/storeName';

interface StoreDto {
  id: string;
  name: string;
}

export class Store {
  private id: StoreId;
  private name: StoreName;

  constructor(params: { id: string; name: string }) {
    const { id, name } = params;

    this.id = new StoreId(id);
    this.name = new StoreName(name);
  }

  toDto(): StoreDto {
    return {
      id: this.id.value,
      name: this.name.value,
    };
  }
}
