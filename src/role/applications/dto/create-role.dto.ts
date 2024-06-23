import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateRoleDto {
    @IsString()
    @MinLength(8)
    @MaxLength(255)
    rol: string;

    
}