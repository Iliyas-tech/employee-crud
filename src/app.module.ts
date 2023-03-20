import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeEntity } from './employee/employee.entity';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: process.env.SQL_PASSWORD || 'password',
      database: process.env.DB_NAME || 'test-employee-db',
      entities: [
        EmployeeEntity,
      ],
      synchronize: true,
    }),
    EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}