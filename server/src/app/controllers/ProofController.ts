import { getRepository } from 'typeorm';

import Template from '../models/Template';
import Test from '../models/Test';


class  ProofController {
  public async show(): Promise <Test> {
    const testRepository = getRepository(Test);
    const templateRepository = getRepository(Template);

    var resultSudent = testRepository.findOne({where: examresult});
    const respostaStudent = testRepository.find({where: answer});
    const respostaTemplete = templateRepository.find({where: answer});

    resultSudent = (await respostaStudent).some(exam)
    function exam (value: Test, index: number, array: Test[]) {
      if(value == respostaTemplete) {
          return true
      }
    } 

    await testRepository.save(resultSudent);

    return resultSudent;
  }
}

export default ProofController;