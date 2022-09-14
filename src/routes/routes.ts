import { Router } from 'express'
import {CardController} from "../controller/CardController"
import { ColumnController } from '../controller/ColumnController'

const routes = Router()

routes.post('/card', new CardController().createCard )
routes.post('/column', new ColumnController().create)
routes.get('/card', new CardController().getCards)
routes.get("/card/:id", new CardController().getCard);
routes.put("/card/:id", new CardController().updateCard)
export default routes;