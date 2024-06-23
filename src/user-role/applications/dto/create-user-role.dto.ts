import { IsInt } from 'class-validator';

export class CreateUserRoleDto {
    @IsInt()
    id_usuario: number;

    @IsInt()
    id_rol: number;
}
