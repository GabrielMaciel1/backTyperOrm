import { Router } from 'express'
import {CardController} from "../controller/CardController"
import { ColumnController } from '../controller/ColumnController'

const routes = Router()

routes.post('/card', new CardController().create )
routes.post('/column', new ColumnController().create)
export default routes;