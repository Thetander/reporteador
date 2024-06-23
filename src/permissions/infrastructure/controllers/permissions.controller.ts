import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PermissionsService } from '../../applications/services/permissions.service';
import { CreatePermissionsDto, EditPermissionsDto } from '../../applications/dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('permissions')
@Controller('permissions')
export class PermissionsController {
    constructor(private readonly permissionsService: PermissionsService) {}

    @Get()
    async getMany() {
        const data = await this.permissionsService.getMany();
        return { data };
    }

    @Get(':id')
    async getOne(@Param('id') id: number) {
        const data = await this.permissionsService.getOne(id);
        return { data };
    }

    @Post()
    async createOne(@Body() dto: CreatePermissionsDto) {
        const data = await this.permissionsService.createOne(dto);
        return { message: 'Permission created', data };
    }

    @Put(':id')
    async editOne(@Param('id') id: number, @Body() dto: EditPermissionsDto) {
        const data = await this.permissionsService.editOne(id, dto);
        return { message: 'Permission edited', data };
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: number) {
        const data = await this.permissionsService.deleteOne(id);
        return { message: 'Permission deleted', data };
    }
}
