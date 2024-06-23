import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRole } from '../applications/domain/entities/user-role.entity';
import { UserRoleService } from '../applications/services/user-role.service';
import { UserRoleController } from '../infrastructure/controllers/user-role.controller';

@Module({
    imports: [TypeOrmModule.forFeature([UserRole])],
    controllers: [UserRoleController],
    providers: [UserRoleService],
    exports: [UserRoleService],
})
export class UserRoleModule {}
