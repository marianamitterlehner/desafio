import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
  } from 'typeorm';
  
  @Entity('students')
  class Student {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    name: string;
  
    @Column()
    bimonthlyNote1: number;

    @Column()
    bimonthlyNote2: number;

    @Column()
    bimonthlyNote3: number;

    @Column()
    bimonthlyNote4: number;

    @Column()
    gradeAverage: number;
  }
  
  export default Student;