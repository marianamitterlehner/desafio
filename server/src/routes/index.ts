
import { Router } from 'express';

import studentsRouter from './students.routes';
import templateRouter from './template.routes';
import testsRouter from './tests.routes';

const routes = Router();

routes.use('/students', studentsRouter);
routes.use('/tests', testsRouter);
routes.use('/templates', templateRouter);

export default routes;