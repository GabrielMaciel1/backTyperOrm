import AppDataSource from "../database/DataSource";
import {Columns} from "../entities/Column"

export const columnRepository = AppDataSource.getRepository(Columns)