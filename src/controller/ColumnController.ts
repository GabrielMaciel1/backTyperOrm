import { Request, Response } from "express";
import { columnRepository } from "../repositories/columnRepository";



export class ColumnController{
    
    async getColumns(req:Request, res: Response){
        const {id, columnsId}= req.params
        try {
            const columns= await columnRepository.find()
            // columns.map( (value)=>{
            //     console.log(value.card);
            // }
            // )
            return res.json(columns)
           
          
            
        } catch (error) {
            return res.status(500).json({ message: "erro interno" });
        }
    }

    async getColumn(req:Request, res: Response){
        try {
            const { id } = req.params;
            const column= await columnRepository.findOneBy({ id:(id) })
            return res.json(column)
        } catch (error) {
            return res.status(500).json({ message: "erro interno" });
        }
    }
    
    
    async createColumn(req: Request, res: Response){
        const{name}= req.body

        if(!name){
            return res.status(400).json({message:'error'})
        }

        try {
            const newColumn = columnRepository.create({ name})

			await columnRepository.save(newColumn)
              console.log(newColumn)
			return res.status(201).json(newColumn)
        } catch (error) {
            console.log(error)
            return res.status(500).json({message:"erro interno"})
        }
    }
    async updateColumn(req: Request, res:Response){
        const {id}= req.params
        const {name}= req.body
        

        try {
            const column = await columnRepository.findOneBy({ id: id });

            if (!column){
                return res.status(404).json({ message: "Not user found" });
            } 
            
            column.name = name ? name : column.name
            columnRepository.update( name , req.body);
            const results = await columnRepository.save(column)
            
            return res.send(results);
        } catch (error) {
            
            return res.status(500).json({message:"erro interno"}) 
        }
    }

        async deleteColumn (req: Request, res: Response) {
        const { id, card } = req.params;
        try {
          const result = await columnRepository.delete({ id: id });
      
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