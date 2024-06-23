import { PartialType } from "@nestjs/mapped-types";
import { CreatePermissionsDto } from "../dto";

export class EditPermissionsDto extends PartialType(CreatePermissionsDto) {}
