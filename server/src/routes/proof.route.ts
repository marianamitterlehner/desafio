import { Router } from 'express';
import { getRepository } from 'typeorm';

import Test from '../app/models/Test';
import ProofController from '../app/controllers/ProofController'

const ProofsRouter = Router();

ProofsRouter.get('/', async (request, response) => {
  const proofController = new ProofController();
  const studentsRepository = getRepository(Test);
  var answerRepository =  proofController.show({
    answer:studentsRepository.findOne({where:answer})
  })

  return response.json(answerRepository);
});

export default ProofsRouter;