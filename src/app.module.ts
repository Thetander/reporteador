// src/app.module.ts
import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/modules/user.module';
import typeOrmConfig from './ormconfig'; //config de TypeORM
import { DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_USERNAME } from './config/constants';
import { AuthModule } from './auth/modules/auth.module';
import { RoleModule } from './role/modules/role.module';
import { MenuModule } from './menu/modules/menu.module';
import { PermissionsModule } from './permissions/modules/permissions.module';
import { MenuRoleModule } from './menus-roles/modules/menus-roles.module';
import { PermissionsMenuModule } from './permissions-menu/modules/permissions-menu.module';
import { UserRoleModule } from './user-role/modules/user-role.module';
import { DatabaseConnectionModule } from './database-connection/modules/database-connection.module';


 
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject:[ConfigService],
      useFactory:(config: ConfigService)=>({
      // configurar 
      type: 'postgres',
      host: config.get<string>(DATABASE_HOST),
      port: parseInt(config.get<string>(DATABASE_PORT),10),
      username: config.get<string>(DATABASE_USERNAME),
      password: config.get<string>(DATABASE_PASSWORD),
      database: config.get<string>(DATABASE_NAME),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true, 
       })
      }), 
    ConfigModule.forRoot({
     isGlobal: true,
     envFilePath: '.env'
    }),
    UserModule,
    AuthModule,
    RoleModule,
    MenuModule,
    PermissionsModule,
    MenuRoleModule,
    PermissionsMenuModule,
    UserRoleModule,
    DatabaseConnectionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
