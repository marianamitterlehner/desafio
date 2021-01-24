import { getRepository } from 'typeorm';

import Test from '../models/Test';

interface Request {
    students:string;
    answer:string;
    templetes:string;
}

class  TestsController {
  public async store({ students, answer, templetes }: Request): Promise<Test> {
    const testsRepository = getRepository(Test);

    const test = testsRepository.create({
        students, answer, templetes
    });

    await testsRepository.save(test);

    return test;
  }
}

export default TestsController;