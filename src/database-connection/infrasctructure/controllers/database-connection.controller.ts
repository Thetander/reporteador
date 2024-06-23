import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateDatabaseConnectionDto, EditDatabaseConnectionDto } from '../../applications/dto';
import { DatabaseConnectionService } from '../../applications/services/database-connection.service';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('database-connection')
@Controller('database-connection')
export class DatabaseConnectionController {
  constructor(
    private readonly databaseConnectionService: DatabaseConnectionService,
  ) {}

  @Get()
  async getMany() {
    const data = await this.databaseConnectionService.getMany();
    return { data };
  }

  @Get(':id')
  async getOne(@Param('id') id: number) {
    const data = await this.databaseConnectionService.getOne(id);
    return { data };
  }

  @Post()
  async createOne(@Body() dto: CreateDatabaseConnectionDto) {
    const data = await this.databaseConnectionService.createOne(dto);
    return { message: 'Database connection created', data };
  }

  @Put(':id')
  async editOne(@Param('id') id: number, @Body() dto: EditDatabaseConnectionDto) {
    const data = await this.databaseConnectionService.editOne(id, dto);
    return { message: 'Database connection edited', data };
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: number) {
    const data = await this.databaseConnectionService.deleteOne(id);
    return { message: 'Database connection deleted', data };
  }

  @Post(':id/connect')
  async connect(@Param('id') id: number) {
    const connection = await this.databaseConnectionService.createDatabaseConnection(id);
    return { message: 'Connected to database', connectionId: connection.name }; 
  }
  
  @Get(':id/query')
  async runQuery(@Param('id') id: number, @Query('query') query: string) {
    const data = await this.databaseConnectionService.runQuery(id, query);
    return { data };
  }
}