import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  JoinTable,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Columns } from "./Column";

@Entity("card")
export class Card {
  @PrimaryColumn("uuid")
  id: string;


  @Column()
  name: string;


  @ManyToOne(() => Columns, columns => columns.card)
  @JoinTable({ 
    name: "column_card",
    joinColumn:{
      name: 'columns_id',
      referencedColumnName:"id"
    },
    inverseJoinColumn:{
      name:"card_id",
      referencedColumnName: 'id'
    }
  })
  columns: Columns[];

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) this.id = uuid();
  } 
}
