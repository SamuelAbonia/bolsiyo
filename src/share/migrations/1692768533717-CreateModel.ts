import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateModel1692768533717 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createDatabase('bolsiyo');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropDatabase('bolsiyo');
  }
}
