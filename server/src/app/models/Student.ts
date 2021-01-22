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
    bimonthlyNote1: string;

    @Column()
    bimonthlyNote2: string;

    @Column()
    bimonthlyNote3: string;

    @Column()
    bimonthlyNote4: string;

    @Column()
    gradeAverage: string;
  }
  
  export default Student;