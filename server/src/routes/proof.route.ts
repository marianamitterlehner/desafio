import { Router } from 'express';
import { getRepository } from 'typeorm';


import Students from '../app/models/Student';
import Template from '../app/models/Template';
import Test from '../app/models/Test';

import StudentsController from '../app/controllers/StudentsController';


const StudentsRouter = Router();


StudentsRouter.get('/', async (request, response) => {
  const studentsRepository = getRepository(Students);
  const students = await studentsRepository.findOne('');

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