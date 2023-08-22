import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ProductEntity } from 'src/product/domain/product.entity';

@Entity({ name: 'product_logs' })
export class ProductLogsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
    name: 'action',
  })
  action: string;

  @CreateDateColumn({
    nullable: false,
    name: 'created_at',
  })
  createdAt: Date;

  @Column({
    name: 'units',
  })
  units: number;

  @Column({
    name: 'product_id',
  })
  productId: string;

  @ManyToOne(() => ProductEntity, (product) => product.id)
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;
}
