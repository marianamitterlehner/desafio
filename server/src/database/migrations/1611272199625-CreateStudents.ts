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
                  type: 'varchar',
                },
                {
                  name: 'bimonthlyNote2',
                  type: 'varchar',
                },
                {
                    name: 'bimonthlyNote3',
                    type: 'varchar',
                },
                {
                    name: 'bimonthlyNote4',
                    type: 'varchar',
                },
                {
                    name: 'gradeAverage',
                    type: 'varchar',
                },
              ],
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('students');
    }

}
