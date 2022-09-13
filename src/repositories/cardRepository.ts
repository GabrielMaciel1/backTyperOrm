import AppDataSource from "../database/DataSource";
import { Card } from "../entities/Card";

export const cardRepository = AppDataSource.getRepository(Card)