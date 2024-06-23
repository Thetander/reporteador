import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateMenuRoleDto, EditMenuRoleDto } from '../../applications/dto';
import { MenuRoleService } from '../../applications/services/menus-roles.service';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('menu-role')
@Controller('menu-role')
export class MenuRoleController {
    constructor(
        private readonly menuRoleService: MenuRoleService
    ) {}

    @Get()
    async getMany() {
        const data = await this.menuRoleService.getMany();
        return { data };
    }

    @Get(':id')
    async getOne(@Param('id') id: number) {
        const data = await this.menuRoleService.getOne(id);
        return { data };
    }

    @Post()
    async createOne(@Body() dto: CreateMenuRoleDto) {
        const data = await this.menuRoleService.createOne(dto);
        return { message: 'MenuRole created', data };
    }

    @Put(':id')
    async editOne(@Param('id') id: number, @Body() dto: EditMenuRoleDto) {
        const data = await this.menuRoleService.editOne(id, dto);
        return { message: 'MenuRole edited', data };
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: number) {
        const data = await this.menuRoleService.deleteOne(id);
        return { message: 'MenuRole deleted', data };
    }
}
