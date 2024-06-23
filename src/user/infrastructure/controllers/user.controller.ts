import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from 'src/user/applications/dto/create-user.dto';
import { EditUserDto } from 'src/user/applications/dto/edit-User.dto';
import { UserService } from 'src/user/applications/services/user.service';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Usuario')
@Controller('user')
export class UserController {

    constructor(
        private readonly userService: UserService
    ){
    }  //para convertir en metodos http, hay que usar el decorador de metodos 
    @Get()
    async getMany(){

        const data = await this.userService.getMany();
        return {data}
    }

    @Get(':id')
    async getOne( 
        @Param('id') id: number,
    ){
    const data = await this.userService.getOne(id);
         return {data}
    }

   @Post()
    async createOne(
        @Body() dto:CreateUserDto
    ){
        const data = await this.userService.createOne(dto)
        return {message : 'User created', data}
    }

    @Put(':id')
    async editOne(
        @Param('id') id: number,
        @Body() dto:EditUserDto
    ){
        const data = await this.userService.editOne(id, dto)
        return{message: 'User edited', data}
    }
    
    @Delete(':id')
    async deleteOne(
        @Param ('id') id:number
    ){
        const data = await this.userService.deleteOne(id)
        return {messagee: 'User deleted',data}
    }

    
}