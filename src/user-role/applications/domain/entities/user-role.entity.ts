import { 
    PrimaryGeneratedColumn,
    Column,CreateDateColumn,
    BeforeInsert, 
    BeforeUpdate,
    Entity} from "typeorm";
// de cada entidad se debe crear un servicio?
@Entity('user-role') 
export class UserRole{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'int'})
    id_usuario: number;

    @Column({type:'int'})
    id_rol: number;
    
}