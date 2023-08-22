import { ProductEntity } from 'src/product/domain/product.entity';
import { StoreEntity } from 'src/store/domain/store.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'category' })
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: '100',
    nullable: false,
    name: 'name',
  })
  name: string;

  @Column({
    name: 'store_id',
  })
  storeId: string;

  @ManyToOne(() => StoreEntity, (store) => store.id)
  @JoinColumn({ name: 'store_id' })
  store?: StoreEntity;

  @OneToMany(() => ProductEntity, (product) => product.category)
  products: ProductEntity[];
}
