import { StoreId } from 'src/store/domain/valueObjects/storeId';
import { CategoryId } from './valueObjects/categoryId';
import { CategoryName } from './valueObjects/categoryName';

export class CategoryDto {
  id: string;
  name: string;
  storeId: string;
}

export class Category {
  private id: CategoryId;
  private name: CategoryName;
  private storeId: StoreId;

  constructor(params: { id: string; name: string; storeId: string }) {
    const { id, name, storeId } = params;

    this.id = new CategoryId(id);
    this.name = new CategoryName(name);
    this.storeId = new StoreId(storeId);
  }

  toDto(): CategoryDto {
    return {
      id: this.id.value,
      name: this.name.value,
      storeId: this.storeId.value,
    };
  }
}
