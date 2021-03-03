import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
/* import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository'; */
import { AuthModule } from 'src/auth/auth.module';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Module({
     imports: [
          /* TypeOrmModule.forFeature([TaskRepository]), */
          NestjsQueryGraphQLModule.forFeature({
               imports: [NestjsQueryTypeOrmModule.forFeature([Task])],
               resolvers: [
                    {
                         DTOClass: CreateTaskDto,
                         EntityClass: Task,
                    },
               ],
          }),
          AuthModule,
     ],
     controllers: [TasksController],
     providers: [TasksService],
})
export class TasksModule {}
