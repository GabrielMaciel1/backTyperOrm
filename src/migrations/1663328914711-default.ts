import { MigrationInterface, QueryRunner } from "typeorm";

export class default1663328914711 implements MigrationInterface {
    name = 'default1663328914711'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "card" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "columnsId" uuid, CONSTRAINT "PK_9451069b6f1199730791a7f4ae4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "columns" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4ac339ccbbfed1dcd96812abbd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "card" ADD CONSTRAINT "FK_9e47bd96a8ce75598a576192b77" FOREIGN KEY ("columnsId") REFERENCES "columns"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "card" DROP CONSTRAINT "FK_9e47bd96a8ce75598a576192b77"`);
        await queryRunner.query(`DROP TABLE "columns"`);
        await queryRunner.query(`DROP TABLE "card"`);
    }

}
