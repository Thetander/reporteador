import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuRole } from '../domain/entities/menus-roles.entity';
import { MenuRoleService } from '../applications/services/menus-roles.service';
import { MenuRoleController } from '../infrastructure/controllers/menus-roles.controller';

@Module({
    imports: [TypeOrmModule.forFeature([MenuRole])],
    controllers: [MenuRoleController],
    providers: [MenuRoleService],
    exports: [MenuRoleService],
})
export class MenuRoleModule {}
