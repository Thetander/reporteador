import { Column, Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity('menu')
export class menu{

    @PrimaryGeneratedColumn()
    id_menu:number;

    @Column({type:'varchar', length: 50})
    menu:string;
}