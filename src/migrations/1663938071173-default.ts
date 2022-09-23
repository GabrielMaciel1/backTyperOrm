import { MigrationInterface, QueryRunner } from "typeorm";

export class default1663938071173 implements MigrationInterface {
    name = 'default1663938071173'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "card" DROP CONSTRAINT "FK_9e47bd96a8ce75598a576192b77"`);
        await queryRunner.query(`ALTER TABLE "card" ADD CONSTRAINT "FK_9e47bd96a8ce75598a576192b77" FOREIGN KEY ("columnsId") REFERENCES "columns"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "card" DROP CONSTRAINT "FK_9e47bd96a8ce75598a576192b77"`);
        await queryRunner.query(`ALTER TABLE "card" ADD CONSTRAINT "FK_9e47bd96a8ce75598a576192b77" FOREIGN KEY ("columnsId") REFERENCES "columns"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
