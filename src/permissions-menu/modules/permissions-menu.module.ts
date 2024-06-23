import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionsMenu } from '../domain/entities';
import { PermissionsMenuService } from '../applications/services/permissions-menu.service';
import { PermissionsMenuController } from '../infrastructure/controllers/permissions-menu.controller';

@Module({
    imports: [TypeOrmModule.forFeature([PermissionsMenu])],
    controllers: [PermissionsMenuController],
    providers: [PermissionsMenuService],
    exports: [PermissionsMenuService],
})
export class PermissionsMenuModule {}
