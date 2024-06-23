import { PartialType } from '@nestjs/mapped-types';
import { CreateUserRoleDto } from './create-user-role.dto';

export class EditUserRoleDto extends PartialType(CreateUserRoleDto) {}
