import { CategoryEntity } from 'src/category/domain/category.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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
