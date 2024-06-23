import { IsOptional, IsEmail, MaxLength, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsOptional()
    @IsString()
    @MinLength(2)
    @MaxLength(255)
    name: string;
    
    @IsOptional()
    @IsString()
    @MaxLength(255)
    lastName: string;
    
    @IsEmail()
    email:string;

    @IsString()
    @MinLength(8)
    @MaxLength(255)
    password: string;

        // @IsArray()
        // @IsEnum(AppRoles,{
        //     each: true,
        //     message: 'must be a valid role Value', 
        //     ${EnumToString(AppRoles)
        //     }
        // })
        // roles: string[];


}
