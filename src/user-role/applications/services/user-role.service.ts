import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRole } from '../domain/entities/user-role.entity';
import { CreateUserRoleDto, EditUserRoleDto } from '../dto';

@Injectable()
export class UserRoleService {
    constructor(
        @InjectRepository(UserRole)
        private readonly userRoleRepository: Repository<UserRole>
    ) {}

    async getMany() {
        return await this.userRoleRepository.find();
    }

    async getOne(id: number) {
        const userRole = await this.userRoleRepository.findOne({ where: { id } });
        if (!userRole) throw new NotFoundException('UserRole not found');
        return userRole;
    }

    async createOne(dto: CreateUserRoleDto) {
        const newUserRole = this.userRoleRepository.create(dto);
        return await this.userRoleRepository.save(newUserRole);
    }

    async editOne(id: number, dto: EditUserRoleDto) {
        const userRole = await this.getOne(id);
        Object.assign(userRole, dto);
        return await this.userRoleRepository.save(userRole);
    }

    async deleteOne(id: number) {
        const userRole = await this.getOne(id);
        return await this.userRoleRepository.remove(userRole);
    }
}
