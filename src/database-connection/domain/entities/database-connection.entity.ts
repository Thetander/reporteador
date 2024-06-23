import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('database_connection')
export class DatabaseConnection {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 255 })
    host: string;
  
    @Column({ type: 'int' })
    port: number;
  
    @Column({ type: 'varchar', length: 255 })
    username: string;
  
    @Column({ type: 'varchar', length: 255 })
    password: string;
  
    @Column({ type: 'varchar', length: 255 })
    database: string;
  }