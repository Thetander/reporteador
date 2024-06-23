import { IsInt } from 'class-validator';

export class CreateMenuRoleDto {
    @IsInt()
    id_Rol: number;

    @IsInt()
    id_Menu: number;
}
