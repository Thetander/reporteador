import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMenuDto, EditMenuDto } from '../dto';
import { menu } from 'src/menu/domain/entities/menu.entity';

@Injectable()
export class MenuService {
    constructor(
        @InjectRepository(menu)
        private readonly menuRepository: Repository<menu>
    ) {}

    async getMany() {
        return await this.menuRepository.find();
    }

    async getOne(id: number) {
        const menu = await this.menuRepository.findOne({ where: { id_menu: id } });
        if (!menu) throw new NotFoundException('Menu not found');
        return menu;
    }

    async createOne(dto: CreateMenuDto) {
        const newMenu = this.menuRepository.create(dto);
        return await this.menuRepository.save(newMenu);
    }

    async editOne(id: number, dto: EditMenuDto) {
        const menu = await this.getOne(id);
        Object.assign(menu, dto);
        return await this.menuRepository.save(menu);
    }

    async deleteOne(id: number) {
        const menu = await this.getOne(id);
        return await this.menuRepository.remove(menu);
    }
}
