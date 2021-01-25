import { getRepository } from 'typeorm';

import Students from '../models/Student';
import Template from '../models/Template';
import Test from '../models/Test';


class  ProofController {
  public async show(): Promise<Students> {
    const testsRepository = getRepository(Test);

    const respostaStudent = testsRepository.findOne({where: answer});

    var resp = map()

    if(respostaStudent){

    }

    var Final = 

    await studentsRepository.save(student);

    return student;
  }
}

export default ProofController;