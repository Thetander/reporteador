import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserRoleDto, EditUserRoleDto } from '../../applications/dto';
import { UserRoleService } from '../../applications/services/user-role.service';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('user-role')
@Controller('user-role')
export class UserRoleController {
    constructor(
        private readonly userRoleService: UserRoleService
    ) {}

    @Get()
    async getMany() {
        const data = await this.userRoleService.getMany();
        return { data };
    }

    @Get(':id')
    async getOne(@Param('id') id: number) {
        const data = await this.userRoleService.getOne(id);
        return { data };
    }

    @Post()
    async createOne(@Body() dto: CreateUserRoleDto) {
        const data = await this.userRoleService.createOne(dto);
        return { message: 'UserRole created', data };
    }

    @Put(':id')
    async editOne(@Param('id') id: number, @Body() dto: EditUserRoleDto) {
        const data = await this.userRoleService.editOne(id, dto);
        return { message: 'UserRole edited', data };
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: number) {
        const data = await this.userRoleService.deleteOne(id);
        return { message: 'UserRole deleted', data };
    }
}
