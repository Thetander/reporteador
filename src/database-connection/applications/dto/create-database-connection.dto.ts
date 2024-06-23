import { IsInt, IsString } from 'class-validator';

export class CreateDatabaseConnectionDto {
  @IsString()
  host: string;

  @IsInt()
  port: number;

  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  database: string;
}
