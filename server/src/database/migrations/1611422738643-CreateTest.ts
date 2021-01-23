import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CreateTest1611417072110 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'tests',
              columns: [
                {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()',
                },
                {
                    name: 'students',
                    type: 'uuid',
                    isNullable: true,
                },
                {
                    name: 'answer',
                    type: 'varchar',
                },
                {
                    name: 'examresult',
                    type: 'integer',
                },
                {
                    name: 'templates',
                    type: 'uuid',
                    isNullable: true,
                },
              ],
            }),
          );

          await queryRunner.createForeignKey(
            'tests',
            new TableForeignKey({
              columnNames: ['students'],
              referencedColumnNames: ['id'],
              referencedTableName: 'students',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
          );

          await queryRunner.createForeignKey(
            'tests',
            new TableForeignKey({
              columnNames: ['templates'],
              referencedColumnNames: ['id'],
              referencedTableName: 'templates',
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE',
            }),
          );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tests');
    }

}

