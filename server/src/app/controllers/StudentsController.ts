import { getRepository } from 'typeorm';

import Students from '../models/Student';

interface Request {
    name:string;
}

class  StudentsController {
  public async store({ name }: Request): Promise< Students> {
    const studentsRepository = getRepository(Students);

    const student = studentsRepository.create({
        name
    });

    await studentsRepository.save(student);

    return student;
  }
}

export default StudentsController;