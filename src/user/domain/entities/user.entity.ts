import { hash } from "bcryptjs";
import { 
    PrimaryGeneratedColumn,
    Column,CreateDateColumn,
    BeforeInsert, 
    BeforeUpdate,
    Entity} from "typeorm";

@Entity('user') //este nombre debe corresponder al que 
//tenemo en la base de datos.
export class User {
    //clave primaria
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type:'varchar' , length: 255})
    name: string;

    @Column({ name:'last_name',type:'varchar',length:255})
    last_name: string;

    @Column({type:'varchar', length:255 , nullable:false})
    email: string;
    @Column({type:'varchar',length:128,nullable:false, select:false})
    password: string;
    @Column({type: 'bool', default: true})
    status: boolean;

    //fecha cuando crea la insercion en la base datos.
    //para capturar la fecha
    @CreateDateColumn({name:'created_at',type:'timestamp'})
    createdAT:Date;
    

    //hashear la contrenia
        @BeforeInsert()
        @BeforeUpdate()
        async hashPassword(){
            if (!this.password) {
                return;
            }

            this.password = await hash(this.password,10);
        }
}

