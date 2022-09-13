import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Columns } from "./Column";

@Entity("card")
export class Card {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column()
  name: string;


  @ManyToOne(() => Columns)
  @JoinColumn({ name: "column_id" })
  columns: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) this.id = uuid();
  } 
}
