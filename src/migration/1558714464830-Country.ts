import {MigrationInterface, QueryRunner} from "typeorm";

export class Country1558714464830 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `city` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, UNIQUE INDEX `IDX_f8c0858628830a35f19efdc0ec` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `country` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, UNIQUE INDEX `IDX_2c5aa339240c0c3ae97fcc9dc4` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `title` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, UNIQUE INDEX `IDX_5990d0602b4f2a6f893fd55666` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP INDEX `IDX_5990d0602b4f2a6f893fd55666` ON `title`");
        await queryRunner.query("DROP TABLE `title`");
        await queryRunner.query("DROP INDEX `IDX_2c5aa339240c0c3ae97fcc9dc4` ON `country`");
        await queryRunner.query("DROP TABLE `country`");
        await queryRunner.query("DROP INDEX `IDX_f8c0858628830a35f19efdc0ec` ON `city`");
        await queryRunner.query("DROP TABLE `city`");
    }

}
