import { Card } from './Card';
import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, ManyToMany, OneToMany,PrimaryColumn } from "typeorm";
import {v4 as uuid} from "uuid"

@Entity("columns")
export class Columns {
  @PrimaryGeneratedColumn("uuid")
  id: string;


  @Column()
  name: string;

  @OneToMany(()=> Card, (card) => card.columns)
  card: Card[];

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id) this.id = uuid()
  }
}


