import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionsController } from '../infrastructure/controllers/permissions.controller';
import { PermissionsService } from '../applications/services/permissions.service';
import { Permissions } from '../domain/entities/permissions.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Permissions])],
    controllers: [PermissionsController],
    providers: [PermissionsService],
    exports: [PermissionsService],
})
export class PermissionsModule {}
