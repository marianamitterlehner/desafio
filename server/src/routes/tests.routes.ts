import { Router } from 'express';
import { getRepository } from 'typeorm';


import Test from '../app/models/Test';
import TestsController from '../app/controllers/TestsContoller';


const TestsRouter = Router();

TestsRouter.post('/', async (request, response) => {
    try{
        const { students, answer, templetes } = request.body;
        const testsController = new TestsController();

        const tests = await testsController.store({
                students, answer, templetes
               });
        return response.json(tests);
    }catch (erro){
            return response.status(400).json({erro: erro.message})
    }
});

TestsRouter.get('/', async (request, response) => {
  const testsRepository = getRepository(Test);
  const tests = await testsRepository.find();

  return response.json(tests);
});

TestsRouter.get('/:id',  async (request, response) => {
    const testsRepository = getRepository(Test);
    const { id } = request.params;
    const tests = await testsRepository.findOne(id);
  
    return response.json(tests);
  });
  
TestsRouter.delete('/:id', async (request, response) => {
    const testsRepository = getRepository(Test);
    const { id } = request.params;
  
    await testsRepository.delete(id);
  
    return response.send({message:'Seu teste foi excluido'});
  });

export default TestsRouter;