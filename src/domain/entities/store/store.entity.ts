import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryEntity } from '../category/category.entity';

@Entity({ name: 'store' })
export class StoreEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: '100',
    nullable: false,
    name: 'name',
  })
  name: string;

  @OneToMany(() => CategoryEntity, (category) => category.store)
  categories: CategoryEntity[];
}
