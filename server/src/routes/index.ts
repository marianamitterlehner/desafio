
import { Router } from 'express';

import pppsRouter from './students.routes';

const routes = Router();

routes.use('/ppps', pppsRouter);

export default routes;