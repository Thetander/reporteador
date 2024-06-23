import { Module } from '@nestjs/common';
import { AuthService } from '../domain/services/auth.service';
import { AuthController } from '../infrastructure/controller/auth.controller';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/modules/user.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy, LocalStrategy } from '../infrastructure/strategy';
import { JWT_SECRET } from 'src/config/constants';

@Module({
  imports:[ PassportModule.register({
    defaultStrategy: 'jwt'
  }), UserModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory:(config: ConfigService)=>({
        secret: config.get<string>(JWT_SECRET),
        signOptions:{expiresIn: '60m'}
      })
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy,JwtStrategy],

})
export class AuthModule {}
