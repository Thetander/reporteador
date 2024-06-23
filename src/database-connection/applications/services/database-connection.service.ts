import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DatabaseConnection } from '../../domain/entities/database-connection.entity';
import { CreateDatabaseConnectionDto, EditDatabaseConnectionDto } from '../dto/index';
import { createConnection } from 'typeorm';

@Injectable()
export class DatabaseConnectionService {
  private connections = new Map<number, any>();

  constructor(
    @InjectRepository(DatabaseConnection)
    private readonly databaseConnectionRepository: Repository<DatabaseConnection>,
  ) {}

  async getMany() {
    return await this.databaseConnectionRepository.find();
  }

  async getOne(id: number) {
    const connection = await this.databaseConnectionRepository.findOne({ where: { id } });
    if (!connection) throw new NotFoundException('Database connection not found');
    return connection;
  }

  async createOne(dto: CreateDatabaseConnectionDto) {
    const newConnection = this.databaseConnectionRepository.create(dto);
    return await this.databaseConnectionRepository.save(newConnection);
  }

  async editOne(id: number, dto: EditDatabaseConnectionDto) {
    const connection = await this.getOne(id);
    Object.assign(connection, dto);
    return await this.databaseConnectionRepository.save(connection);
  }

  async deleteOne(id: number) {
    const connection = await this.getOne(id);
    return await this.databaseConnectionRepository.remove(connection);
  }

  async createDatabaseConnection(id: number) {
    const connectionInfo = await this.getOne(id);
    const connection = await createConnection({
      name: `connection_${id}`,
      type: 'mysql',
      host: connectionInfo.host,
      port: connectionInfo.port,
      username: connectionInfo.username,
      password: connectionInfo.password,
      database: connectionInfo.database,
      entities: [],
      synchronize: true,
    });
    this.connections.set(id, connection);
    return { name: connection.name }; 
  }

  async getConnection(id: number) {
    if (!this.connections.has(id)) {
      await this.createDatabaseConnection(id);
    }
    return this.connections.get(id);
  }

  async runQuery(id: number, query: string) {
    const connection = await this.getConnection(id);
    return await connection.query(query);
  }

    // async createDatabaseConnection(id: number) {
    //     const connectionInfo = await this.getOne(id);
    //     const connection = await createConnection({
    //         type: 'postgres',
    //         host: connectionInfo.host,
    //         port: connectionInfo.port,
    //         username: connectionInfo.username,
    //         password: connectionInfo.password,
    //         database: connectionInfo.database,
    //         entities: [],
    //         synchronize: true,
    //     });
    //     return connection;
    // }
}
