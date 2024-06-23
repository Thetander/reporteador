import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleController } from '../infrastructure/controllers/role.controller';
import { RoleService } from '../applications/services/role.service';
import { Role } from '../domain/entities';

@Module({
    imports: [TypeOrmModule.forFeature([Role])],
    controllers: [RoleController],
    providers: [RoleService],
    exports: [RoleService],
})
export class RoleModule {}
