import {MigrationInterface, QueryRunner} from "typeorm";

export class Prospect1558710606100 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `prospect` (`id` int NOT NULL AUTO_INCREMENT, `vip` tinyint NOT NULL, `firstName` varchar(255) NOT NULL, `secondName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `company` varchar(255) NOT NULL, `domain` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `gender` int NOT NULL, `title` varchar(255) NOT NULL, `country` varchar(255) NOT NULL, `city` varchar(255) NOT NULL, `address` varchar(255) NOT NULL, `foundOn` varchar(255) NOT NULL, `note` text NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `prospect`");
    }

}
