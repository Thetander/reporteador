import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuController } from '../infrastructure/controllers/menu.controller';
import { MenuService } from '../applications/services/menu.service';
import { menu } from '../domain/entities/menu.entity';

@Module({
    imports: [TypeOrmModule.forFeature([menu])],
    controllers: [MenuController],
    providers: [MenuService],
    exports: [MenuService],
})
export class MenuModule {}
