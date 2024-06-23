import { IsString, MaxLength } from "class-validator";

export class CreateMenuDto {
    @IsString()
    @MaxLength(255)
    menu: string;

    @IsString()
    @MaxLength(255)
    route: string;
}