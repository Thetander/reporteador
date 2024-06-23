import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { RoleService } from '../../applications/services/role.service';
import { CreateRoleDto, EditRoleDto } from '../../applications/dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Roles')
@Controller('Role')
export class RoleController {
    constructor(private readonly roleService: RoleService) {}

    @Get()
    async getMany() {
        const data = await this.roleService.getMany();
        return { data };
    }

    @Get(':id')
    async getOne(@Param('id') id: number) {
        const data = await this.roleService.getOne(id);
        return { data };
    }

    @Post()
    async createOne(@Body() dto: CreateRoleDto) {
        const data = await this.roleService.createOne(dto);
        return { message: 'Role created', data };
    }

    @Put(':id')
    async editOne(@Param('id') id: number, @Body() dto: EditRoleDto) {
        const data = await this.roleService.editOne(id, dto);
        return { message: 'Role edited', data };
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: number) {
        const data = await this.roleService.deleteOne(id);
        return { message: 'Role deleted', data };
    }
}
