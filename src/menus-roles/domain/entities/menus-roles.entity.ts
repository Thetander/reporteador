import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity ('menuRole')
export class MenuRole{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar'})
    id_Rol: number;

    @Column({type: 'varchar'})
    id_Menu: number;
}
