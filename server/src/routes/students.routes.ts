import { Router } from 'express';
import { getRepository } from 'typeorm';


import Students from '../app/models/Student';
import StudentsController from '../app/controllers/StudentsController';


const StudentsRouter = Router();

StudentsRouter.post('/', async (request, response) => {
    try{
        const { name,
                bimonthlyNote1,
                bimonthlyNote2,
                bimonthlyNote3,
                bimonthlyNote4 } = request.body;
        const studentsController = new StudentsController();

        const students = await studentsController.store({
                name,
                bimonthlyNote1,
                bimonthlyNote2,
                bimonthlyNote3,
                bimonthlyNote4 
               });
        return response.json(students);
    }catch (erro){
            return response.status(400).json({erro: erro.message})
    }
});

StudentsRouter.get('/', async (request, response) => {
  const studentsRepository = getRepository(Students);
  const students = await studentsRepository.find();

  return response.json(students);
});

StudentsRouter.get('/:id',  async (request, response) => {
    const studentsRepository = getRepository(Students);
    const { id } = request.params;
    const students = await studentsRepository.findOne(id);
  
    return response.json(students);
  });
  
StudentsRouter.delete('/:id', async (request, response) => {
    const studentsRepository = getRepository(Students);
    const { id } = request.params;
  
    await studentsRepository.delete(id);
  
    return response.send({message:'Seu estudante foi excluido'});
  });

export default StudentsRouter;