import { Router } from 'express';
import { getRepository } from 'typeorm';

import Template from '../app/models/Template';
import TemplateController from '../app/controllers/TemplatesController';


const TemplatesRouter = Router();

TemplatesRouter.post('/', async (request, response) => {
    try{
        const { answer } = request.body;
        const templatesController = new TemplateController();

        const template = await templatesController.store({
                answer
               });
        return response.json(template);
    }catch (erro){
            return response.status(400).json({erro: erro.message})
    }
});

TemplatesRouter.get('/', async (request, response) => {
  const templatesRepository = getRepository(Template);
  const template = await templatesRepository.find();

  return response.json(template);
});

TemplatesRouter.get('/:id',  async (request, response) => {
    const templatesRepository = getRepository(Template);
    const { id } = request.params;
    const template = await templatesRepository.findOne(id);
  
    return response.json(template);
  });
  
TemplatesRouter.delete('/:id', async (request, response) => {
    const templatesRepository = getRepository(Template);
    const { id } = request.params;
  
    await templatesRepository.delete(id);
  
    return response.send({message:'Seu Gabarito foi excluido'});
  });

export default TemplatesRouter;