import { IsInt } from 'class-validator';

export class CreatePermissionsMenuDto {
    @IsInt()
    id_menu_role: number;

    @IsInt()
    id_permiso: number;
}
