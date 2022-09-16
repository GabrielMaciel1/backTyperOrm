import { MigrationInterface, QueryRunner } from "typeorm";

export class default1663266503778 implements MigrationInterface {
    name = 'default1663266503778'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "card" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "columnsId" uuid, "columnsBoardId" character varying, CONSTRAINT "PK_9451069b6f1199730791a7f4ae4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "columns" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "boardId" character varying NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_29c00a2365ac5fce39e53ca8066" PRIMARY KEY ("id", "boardId"))`);
        await queryRunner.query(`ALTER TABLE "card" ADD CONSTRAINT "FK_bc51d6e2d000f436d14acbe5eb6" FOREIGN KEY ("columnsId", "columnsBoardId") REFERENCES "columns"("id","boardId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "card" DROP CONSTRAINT "FK_bc51d6e2d000f436d14acbe5eb6"`);
        await queryRunner.query(`DROP TABLE "columns"`);
        await queryRunner.query(`DROP TABLE "card"`);
    }

}
