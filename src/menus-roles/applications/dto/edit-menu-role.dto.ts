import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuRoleDto } from './create-menu-role.dto';

export class EditMenuRoleDto extends PartialType(CreateMenuRoleDto) {}
