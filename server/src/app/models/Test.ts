import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  
  import Student from './Student';
  import Template from './Template';

  
  @Entity('tests')
  class Tests {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @ManyToOne(() => Student)
    @JoinColumn({ name: 'students' })
    students: Student;

    @ManyToOne(() => Template)
    @JoinColumn({ name: 'templates' })
    templates: Template;
  
    @Column()
    answer: string;
  
    @Column()
    examresult: number;

  }
  
  export default Tests;