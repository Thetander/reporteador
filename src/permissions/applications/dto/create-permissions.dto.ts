import { IsString, MaxLength } from "class-validator";

export class CreatePermissionsDto {
    @IsString()
    @MaxLength(255)
    permission: string;
}
