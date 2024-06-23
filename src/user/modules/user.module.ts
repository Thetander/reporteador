import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from '../infrastructure/controllers/user.controller';
import { UserService } from '../applications/services/user.service';
import { User } from '../domain/entities/user.entity';

@Module({
    // aqui se importa la entidad de User
  imports: [TypeOrmModule.forFeature([User])], 
  controllers:[UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
