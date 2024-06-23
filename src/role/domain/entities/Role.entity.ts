import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Role')
export class Role{
    @PrimaryGeneratedColumn()
    id_rol: number;
    @Column({type: 'varchar'})
    rol: string;
}
