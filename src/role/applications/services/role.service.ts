import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../../domain/entities/Role.entity';
import { CreateRoleDto, EditRoleDto } from '../dto';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role)
        private readonly roleRepository: Repository<Role>
    ) {}

    async getMany() {
        return await this.roleRepository.find();
    }

    async getOne(id: number) {
        const role = await this.roleRepository.findOne({ where: { id_rol: id } });
        if (!role) throw new NotFoundException('Role not found');
        return role;
    }

    async createOne(dto: CreateRoleDto) {
        const newRole = this.roleRepository.create(dto);
        return await this.roleRepository.save(newRole);
    }

    async editOne(id: number, dto: EditRoleDto) {
        const role = await this.getOne(id);
        Object.assign(role, dto);
        return await this.roleRepository.save(role);
    }

    async deleteOne(id: number) {
        const role = await this.getOne(id);
        return await this.roleRepository.remove(role);
    }
}
