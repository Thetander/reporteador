import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permissions } from '../../domain/entities/permissions.entity';
import { CreatePermissionsDto, EditPermissionsDto } from '../dto';

@Injectable()
export class PermissionsService {
    constructor(
        @InjectRepository(Permissions)
        private readonly permissionsRepository: Repository<Permissions>
    ) {}

    async getMany() {
        return await this.permissionsRepository.find();
    }

    async getOne(id: number) {
        const permission = await this.permissionsRepository.findOne({ where: { id_permission: id } });
        if (!permission) throw new NotFoundException('Permission not found');
        return permission;
    }

    async createOne(dto: CreatePermissionsDto) {
        const newPermission = this.permissionsRepository.create(dto);
        return await this.permissionsRepository.save(newPermission);
    }

    async editOne(id: number, dto: EditPermissionsDto) {
        const permission = await this.getOne(id);
        Object.assign(permission, dto);
        return await this.permissionsRepository.save(permission);
    }

    async deleteOne(id: number) {
        const permission = await this.getOne(id);
        return await this.permissionsRepository.remove(permission);
    }
}
