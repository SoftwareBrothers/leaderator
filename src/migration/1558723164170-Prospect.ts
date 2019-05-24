import {MigrationInterface, QueryRunner} from "typeorm";

export class Prospect1558723164170 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `prospect` CHANGE `vip` `vip` tinyint NULL");
        await queryRunner.query("ALTER TABLE `prospect` CHANGE `secondName` `secondName` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `prospect` CHANGE `address` `address` varchar(255) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `prospect` CHANGE `address` `address` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `prospect` CHANGE `secondName` `secondName` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `prospect` CHANGE `vip` `vip` tinyint NOT NULL");
    }

}
