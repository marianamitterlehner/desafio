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
  }
  
  export default Student;