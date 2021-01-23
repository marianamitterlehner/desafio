import { getRepository } from 'typeorm';

import Students from '../models/Student';

interface Request {
    name:string;
    bimonthlyNote1: number;
    bimonthlyNote2:number;
    bimonthlyNote3: number;
    bimonthlyNote4: number;
}

class  StudentsController {
  public async store({ name, bimonthlyNote1, bimonthlyNote2, bimonthlyNote3, bimonthlyNote4 }: Request): Promise< Students> {
    const studentsRepository = getRepository(Students);

    const student = studentsRepository.create({
        name, bimonthlyNote1, bimonthlyNote2, bimonthlyNote3, bimonthlyNote4
    });

    await studentsRepository.save(student);

    return student;
  }
}

export default StudentsController;