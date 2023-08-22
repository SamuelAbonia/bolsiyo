import { CategoryEntity } from 'src/category/domain/category.entity';
import { ProductLogsEntity } from 'src/product_logs/domain/productLogs.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

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

  @OneToMany(() => ProductLogsEntity, (productLogs) => productLogs.product)
  producLogs: ProductLogsEntity[];

  @Column({
    name: 'category_id',
  })
  categoryId: string;

  @CreateDateColumn({
    nullable: false,
    name: 'created_at',
  })
  createdAt?: Date;

  @UpdateDateColumn({
    nullable: false,
    name: 'updated_at',
  })
  updatedAt?: Date;

  @DeleteDateColumn({
    nullable: false,
    name: 'deleted_at',
  })
  deletedAt?: Date;
}
