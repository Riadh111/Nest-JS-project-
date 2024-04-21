import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from './employee/employee.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://root:root@cluster0.ckdqbjq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    EmployeeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
