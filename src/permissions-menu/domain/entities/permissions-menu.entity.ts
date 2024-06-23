import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('permissionsMenu')
export class PermissionsMenu{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int'})
  id_menu_role: number;

  @Column({ type:'int'  })
  id_permiso:number;
}