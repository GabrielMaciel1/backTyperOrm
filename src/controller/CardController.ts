import { Request, Response } from "express";
import { cardRepository } from "../repositories/cardRepository";


export class CardController{
    async create(req: Request, res: Response){
        const{name}= req.body

        if(!name){
            return res.status(400).json({message:'se fudeo'})
        }

        try {
            const newCard = cardRepository.create({ name })

			await cardRepository.save(newCard)
             console.log(newCard)
			return res.status(201).json(newCard)
        } catch (error) {
            console.log(error)
            return res.status(500).json({message:"erro interno"})
        }
    }
        
    
}