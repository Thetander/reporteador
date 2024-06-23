import { BadRequestException, Injectable , NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/domain/entities';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/user/applications/dto/create-user.dto';
import { EditUserDto } from '../dto/edit-User.dto';

export interface UserfindOne{
    id?: number;
    email?: string;
}
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){}

    async getMany(){
        return await this.userRepository.find();
    }

    async getOne(id: number){ 
        const user = await this.userRepository.findOne({ where: { id } });

        if (!user) throw new NotFoundException('user dont exist');
        return user;
    }

    async createOne(dto: CreateUserDto){
        const userExist = await this.userRepository.findOne({ where: { email: dto.email } });
        if(userExist) throw new BadRequestException('User already registered with email');
       
        const newUser = this.userRepository.create(dto);
        const user = await this.userRepository.save(newUser);
        delete user.password; 
        return user;
    }

    async editOne(id: number, dto:EditUserDto){
        const userS = await this.getOne(id)
        const editedUser = Object.assign(userS, dto)
        const user =  await this.userRepository.save(editedUser);
        delete user.password;
        return user;
    }

    async deleteOne(id:number){
        const user = await this.getOne(id)
       return await this.userRepository.remove(user);
    }
    async findOne(data: UserfindOne){
        //usar querybuilder
      return await this.userRepository
      .createQueryBuilder('user')
      .where(data)
      .addSelect('user.password')
      .getOne()
    }
}
