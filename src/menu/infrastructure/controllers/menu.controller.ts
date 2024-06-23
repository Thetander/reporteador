import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MenuService } from '../../applications/services/menu.service';
import { CreateMenuDto, EditMenuDto } from '../../applications/dto';

import { ApiTags } from '@nestjs/swagger';


@ApiTags('Menu')
@Controller('menu')
export class MenuController {
    constructor(private readonly menuService: MenuService) {}

    @Get()
    async getMany() {
        const data = await this.menuService.getMany();
        return { data };
    }

    @Get(':id')
    async getOne(@Param('id') id: number) {
        const data = await this.menuService.getOne(id);
        return { data };
    }

    @Post()
    async createOne(@Body() dto: CreateMenuDto) {
        const data = await this.menuService.createOne(dto);
        return { message: 'Menu created', data };
    }

    @Put(':id')
    async editOne(@Param('id') id: number, @Body() dto: EditMenuDto) {
        const data = await this.menuService.editOne(id, dto);
        return { message: 'Menu edited', data };
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: number) {
        const data = await this.menuService.deleteOne(id);
        return { message: 'Menu deleted', data };
    }
}
