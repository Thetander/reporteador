import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'tander',
  password: 'reporteador',
  database: 'reporteadorDB',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, 
};

export default config;
