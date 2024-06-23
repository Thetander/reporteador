import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePermissionsMenuDto, EditPermissionsMenuDto } from '../../applications/dto';
import { PermissionsMenuService } from '../../applications/services/permissions-menu.service';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('permissions-menu')
@Controller('permissions-menu')
export class PermissionsMenuController {
    constructor(
        private readonly permissionsMenuService: PermissionsMenuService
    ) {}

    @Get()
    async getMany() {
        const data = await this.permissionsMenuService.getMany();
        return { data };
    }

    @Get(':id')
    async getOne(@Param('id') id: number) {
        const data = await this.permissionsMenuService.getOne(id);
        return { data };
    }

    @Post()
    async createOne(@Body() dto: CreatePermissionsMenuDto) {
        const data = await this.permissionsMenuService.createOne(dto);
        return { message: 'PermissionsMenu created', data };
    }

    @Put(':id')
    async editOne(@Param('id') id: number, @Body() dto: EditPermissionsMenuDto) {
        const data = await this.permissionsMenuService.editOne(id, dto);
        return { message: 'PermissionsMenu edited', data };
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: number) {
        const data = await this.permissionsMenuService.deleteOne(id);
        return { message: 'PermissionsMenu deleted', data };
    }
}
