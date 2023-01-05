import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee.module';
import config from './config/key';
// import { dotenv } from 'dotenv';
@Module({
  imports: [MongooseModule.forRoot(config.MONGODB_URI), EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
