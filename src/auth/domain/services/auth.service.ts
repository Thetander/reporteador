import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/applications/services/user.service';
import { compare } from 'bcryptjs'; 
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/domain/entities';
@Injectable()
export class AuthService {

  constructor(
    private readonly Userservice:UserService,
    private readonly jwtService: JwtService
  ){
    
  }
  async validateUser(email: string , pass: string):Promise<any>{
    const user = await this.Userservice.findOne({email});
    
    console.log(user);
    if(user && await compare(pass, user.password)){
        return user;
    }
    return null;
    }
    login(user: User){
      const {id, ...rest} = user;
      const payload ={sib:id};
      return {
        user,
        accessToken: this.jwtService.sign(payload)
       }
     }  
    
}
