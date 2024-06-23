import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('permissions')
export class Permissions{

   @PrimaryGeneratedColumn()
   id_permission:number;

   @Column({type:'varchar', length: 50})
   permission: string;

}