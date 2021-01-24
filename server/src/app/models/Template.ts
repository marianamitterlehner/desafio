import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
  } from 'typeorm';
  
  @Entity('templates')
  class Template {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    answer: string;
  }
  
  export default Template;