//import { Columns } from './../entities/Column';
import { Request, Response } from "express";
import { cardRepository } from "../repositories/cardRepository";


export class CardController{
    
    async getCards(req:Request, res: Response){
        try {
            const cards= await cardRepository.find()
            return res.json(cards)
        } catch (error) {
            return res.status(500).json({ message: "erro interno" });
        }
    }
    async getCard(req:Request, res: Response){
        try {
            const { id } = req.params;
            const card= await cardRepository.findOneBy({ id:(id) })
            return res.json(card)
        } catch (error) {
            return res.status(500).json({ message: "erro interno" });
        }
    }
    
    
    async createCard(req: Request, res: Response){
        const{name, columns}= req.body

        if(!name){
            return res.status(400).json({message:'sei la'})
        }

        try {
            const newCard = cardRepository.create({ name,columns })

			await cardRepository.save(newCard)
              console.log(newCard)
			return res.status(201).json(newCard)
        } catch (error) {
            console.log(error)
            return res.status(500).json({message:"erro interno"})
        }
    }
    async updateCard(req: Request, res:Response){
        const {id, name}= req.params

        try {
            const card = await cardRepository.findOneBy({ id: String (id) });
            if (!card) return res.status(404).json({ message: "Not user found" });
        
            await cardRepository.update({ name: (name) }, req.body);
        
            return res.sendStatus(204);
        } catch (error) {
            
        }
    }
    
}