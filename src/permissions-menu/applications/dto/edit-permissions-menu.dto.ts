import { PartialType } from '@nestjs/mapped-types';
import { CreatePermissionsMenuDto } from './create-permissions-menu.dto';

export class EditPermissionsMenuDto extends PartialType(CreatePermissionsMenuDto) {}
