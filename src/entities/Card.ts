import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  JoinTable,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Columns } from "./Column";

@Entity("card")
export class Card {
  @PrimaryGeneratedColumn("uuid")
  id: string;


  @Column()
  name: string;


  @ManyToOne(type => Columns, card => Card, {eager: true})
  columns: Columns;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) this.id = uuid();
  } 
}
