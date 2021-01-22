import { getRepository } from 'typeorm';

import Students from '../models/Student';

interface Request {
    name:string;
    bimonthlyNote1: string;
    bimonthlyNote2:string;
    bimonthlyNote3: string;
    bimonthlyNote4: string;
    gradeAverage: string;
}

class  StudentsController {
  public async store({ name, bimonthlyNote1, bimonthlyNote2, bimonthlyNote3, bimonthlyNote4, gradeAverage}: Request): Promise< Students> {
    const studentsRepository = getRepository(Students);

    const student = studentsRepository.create({
        name, bimonthlyNote1, bimonthlyNote2, bimonthlyNote3, bimonthlyNote4, gradeAverage
    });

    await studentsRepository.save(student);

    return student;
  }
}

export default StudentsController;