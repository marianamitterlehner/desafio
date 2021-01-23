import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
  } from 'typeorm';
  
  @Entity('templetes')
  class Templete {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    answer: string;
  }
  
  export default Templete;