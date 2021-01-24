import { getRepository } from 'typeorm';

import Template from '../models/Template';

interface Request {
    answer:string;
}

class  TemplateController {
  public async store({answer}: Request): Promise<Template> {
    const templateRepository = getRepository(Template);

    const template = templateRepository.create({
        answer
    });

    await templateRepository.save(template);

    return template;
  }
}

export default TemplateController;