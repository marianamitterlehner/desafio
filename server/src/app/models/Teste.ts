import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  
  import Students from './Student';
  import Templetes from './Template';

  
  @Entity('events')
  class Events {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    user_id: string;
  
    @ManyToOne(() => Students)
    @JoinColumn({ name: 'students' })
    students: Students;

    @ManyToOne(() => Templetes)
    @JoinColumn({ name: 'templetes' })
    templates: Templetes;
  
    @Column()
    answer: string;
  
    @Column()
    examresult: number;

  }
  
  export default Events;