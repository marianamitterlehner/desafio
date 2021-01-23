import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateStudents1611272199625 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'students',
              columns: [
                {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()',
                },
                {
                  name: 'name',
                  type: 'varchar',
                },
                {
                  name: 'bimonthlyNote1',
                  type: 'integer',
                },
                {
                  name: 'bimonthlyNote2',
                  type: 'integer',
                },
                {
                    name: 'bimonthlyNote3',
                    type: 'integer',
                },
                {
                    name: 'bimonthlyNote4',
                    type: 'integer',
                },
                {
                    name: 'gradeAverage',
                    type: 'real',
                    isNullable: true,
                },
              ],
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('students');
    }

}
