import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PermissionsMenu } from '../../domain/entities';
import { CreatePermissionsMenuDto, EditPermissionsMenuDto } from '../dto';

@Injectable()
export class PermissionsMenuService {
    constructor(
        @InjectRepository(PermissionsMenu)
        private readonly permissionsMenuRepository: Repository<PermissionsMenu>
    ) {}

    async getMany() {
        return await this.permissionsMenuRepository.find();
    }

    async getOne(id: number) {
        const permissionsMenu = await this.permissionsMenuRepository.findOne({ where: { id } });
        if (!permissionsMenu) throw new NotFoundException('PermissionsMenu not found');
        return permissionsMenu;
    }

    async createOne(dto: CreatePermissionsMenuDto) {
        const newPermissionsMenu = this.permissionsMenuRepository.create(dto);
        return await this.permissionsMenuRepository.save(newPermissionsMenu);
    }

    async editOne(id: number, dto: EditPermissionsMenuDto) {
        const permissionsMenu = await this.getOne(id);
        Object.assign(permissionsMenu, dto);
        return await this.permissionsMenuRepository.save(permissionsMenu);
    }

    async deleteOne(id: number) {
        const permissionsMenu = await this.getOne(id);
        return await this.permissionsMenuRepository.remove(permissionsMenu);
    }
}

