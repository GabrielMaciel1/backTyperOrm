//import { Columns } from './../entities/Column';
import { Request, Response } from "express";
import { cardRepository } from "../repositories/cardRepository";
import { columnRepository } from "../repositories/columnRepository";


export class CardController{
    
    async getCards(req:Request, res: Response){
        const { columnId } = req.params;
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
        const{name, columnsId}= req.body
        

        if(!name){
            return res.status(400).json({message:'error'})
        }

        try {
           
            const newCard = cardRepository.create( {name, columns: columnsId})
            
			await cardRepository.save(newCard)
              console.log(newCard)
			return res.status(201).json(newCard)
        } catch (error) {
            console.log(error)
            return res.status(500).json({message:"erro interno"})
        }
    }
    async updateCard(req: Request, res:Response){
        const {id}= req.params
        const {name}= req.body
        

        try {
            const card = await cardRepository.findOneBy({ id: id });

            
            
            card.name = name ? name : card.name
            cardRepository.update({name: name}, req.body);
            const results = await cardRepository.save(card)
            
            return res.send(results);
        } catch (error) {
            
            return res.status(500).json({message:"erro interno"}) 
        }
    }

    async updateCardColumnId(req: Request, res:Response){
        const {id}= req.params
        const {columns}= req.body
        

        try {
            const card = await cardRepository.findOneBy({ id: id });

            
            
            
            cardRepository.update({columns: columns}, req.body);
            const results = await cardRepository.save(card)
            
            return res.send(results);
        } catch (error) {
            
            return res.status(500).json({message:"erro interno"}) 
        }
    }
    
        async deleteCard (req: Request, res: Response) {
        const { id } = req.params;
        try {
          const result = await cardRepository.delete({ id: id });
      
          if (result.affected === 0)
            return res.status(404).json({ message: "User not found" });
      
          return res.sendStatus(204);
        } catch (error) {
          if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
          }
        }
    }
}