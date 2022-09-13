import { Request, Response } from 'express'
import { cardRepository } from './../repositories/cardRepository';
import { columnRepository } from './../repositories/columnRepository';


export class ColumnController {
	async create(req: Request, res: Response) {
		const { name } = req.body

		try {
			const newColumn = columnRepository.create({name})
			await columnRepository.save(newColumn)

			return res.status(201).json(newColumn)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Internal Sever Error' })
		}
    }}