import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoryEntity } from '../category/category.entity';

@Entity({ name: 'product' })
export class ProductEntity {
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
    type: 'double',
    nullable: false,
    name: 'purchase_price',
  })
  purchasePrice: number;

  @Column({
    type: 'double',
    nullable: false,
    name: 'sale_price',
  })
  salePrice: number;

  @Column({
    type: 'int',
    nullable: false,
    name: 'stock',
  })
  stock: number;

  @ManyToOne(() => CategoryEntity, (category) => category.id)
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;
}
