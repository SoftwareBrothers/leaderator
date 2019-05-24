import { MigrationInterface, QueryRunner } from 'typeorm';

export class Prospect1558723338758 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'ALTER TABLE `prospect` CHANGE `vip` `vip` tinyint NULL',
    );
    await queryRunner.query(
      'ALTER TABLE `prospect` CHANGE `secondName` `secondName` varchar(255) NULL',
    );
    await queryRunner.query(
      'ALTER TABLE `prospect` CHANGE `address` `address` varchar(255) NULL',
    );
    await queryRunner.query(
      'ALTER TABLE `prospect` CHANGE `note` `note` text NULL',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      'ALTER TABLE `prospect` CHANGE `note` `note` text NOT NULL',
    );
    await queryRunner.query(
      'ALTER TABLE `prospect` CHANGE `address` `address` varchar(255) NOT NULL',
    );
    await queryRunner.query(
      'ALTER TABLE `prospect` CHANGE `secondName` `secondName` varchar(255) NOT NULL',
    );
    await queryRunner.query(
      'ALTER TABLE `prospect` CHANGE `vip` `vip` tinyint NOT NULL',
    );
  }
}
