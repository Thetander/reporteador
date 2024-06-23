import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../guards/local.auth.guard';
import { User } from 'src/user/applications/decorators';
import { User as UserEntity} from 'src/user/domain/entities';
import { JwtAuthGuard } from '../guards';
import { AuthService } from 'src/auth/domain/services/auth.service';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService:AuthService,
  ){}
   
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(
        @User() user: UserEntity
      ){
        const data = await this.authService.login(user)
        return {
          message: 'Login exitoso',
          data
        };
      }
      @UseGuards(JwtAuthGuard)
      @Get('profile')
      profile(){
          return 'estos son tus datos'
      }
  
  
      @UseGuards(JwtAuthGuard)
      @Get('refresh')
      refresh(
      @User() user: UserEntity
      ){
        const data = this.authService.login(user);
        return {
          message: 'refresh exitoso',
          data
        };
      }
}
