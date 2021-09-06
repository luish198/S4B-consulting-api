import Router from 'express';

import { getAllClients, createClient } from '../controllers/clients.js';

const clientsRouter = Router();

clientsRouter
  .route("/")
  .get(getAllClients)
  .post(createClient)


  export default clientsRouter;