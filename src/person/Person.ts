import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export default class Person{
  @PrimaryGeneratedColumn()
  public id: number

  @Column("text")
  public name: string

  constructor(nome:string){
    this.name = nome;
  }
}