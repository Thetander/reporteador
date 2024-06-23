import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConnection } from '../domain/entities/database-connection.entity';
import { DatabaseConnectionService } from '../applications/services/database-connection.service';
import { DatabaseConnectionController } from '../infrasctructure/controllers/database-connection.controller';

@Module({
    imports: [TypeOrmModule.forFeature([DatabaseConnection])],
    controllers: [DatabaseConnectionController],
    providers: [DatabaseConnectionService],
    exports: [DatabaseConnectionService],
})
export class DatabaseConnectionModule {}
