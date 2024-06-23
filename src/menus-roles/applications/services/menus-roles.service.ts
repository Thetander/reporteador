import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MenuRole } from '../../domain/entities/menus-roles.entity';
import { CreateMenuRoleDto, EditMenuRoleDto } from '../dto';

@Injectable()
export class MenuRoleService {
    constructor(
        @InjectRepository(MenuRole)
        private readonly menuRoleRepository: Repository<MenuRole>
    ) {}

    async getMany() {
        return await this.menuRoleRepository.find();
    }

    async getOne(id: number) {
        const menuRole = await this.menuRoleRepository.findOne({ where: { id } });
        if (!menuRole) throw new NotFoundException('MenuRole not found');
        return menuRole;
    }

    async createOne(dto: CreateMenuRoleDto) {
        const newMenuRole = this.menuRoleRepository.create(dto);
        return await this.menuRoleRepository.save(newMenuRole);
    }

    async editOne(id: number, dto: EditMenuRoleDto) {
        const menuRole = await this.getOne(id);
        Object.assign(menuRole, dto);
        return await this.menuRoleRepository.save(menuRole);
    }

    async deleteOne(id: number) {
        const menuRole = await this.getOne(id);
        return await this.menuRoleRepository.remove(menuRole);
    }
}
