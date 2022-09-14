import { MigrationInterface, QueryRunner } from "typeorm";

export class default1663171161286 implements MigrationInterface {
    name = 'default1663171161286'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "card" DROP CONSTRAINT "PK_9451069b6f1199730791a7f4ae4"`);
        await queryRunner.query(`ALTER TABLE "card" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "card" ADD "id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "card" ADD CONSTRAINT "PK_9451069b6f1199730791a7f4ae4" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "card" DROP CONSTRAINT "PK_9451069b6f1199730791a7f4ae4"`);
        await queryRunner.query(`ALTER TABLE "card" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "card" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "card" ADD CONSTRAINT "PK_9451069b6f1199730791a7f4ae4" PRIMARY KEY ("id")`);
    }

}
