import { Router } from 'express'

import {CardController} from "../controller/CardController"
import { ColumnController } from '../controller/ColumnController'

const routes = Router()

routes.post('/card', new CardController().createCard )

routes.post('/columns', new ColumnController().createColumn)

routes.get('/columns', new ColumnController().getColumns)
routes.get('/column/:id', new ColumnController().getColumn)

routes.get('/card', new CardController().getCards)
routes.get("/card/:id", new CardController().getCard);

routes.put("/card/:id", new CardController().updateCard)
routes.put("/card/:id"), new CardController().updateCardColumnId
routes.put('/columns/:id', new ColumnController().updateColumn)

routes.delete("/card/:id", new CardController().deleteCard) 
routes.delete('/columns/:id', new ColumnController().deleteColumn)
export default routes;