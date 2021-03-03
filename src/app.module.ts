import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
     imports: [
          TypeOrmModule.forRoot(typeOrmConfig),
          TasksModule,
          AuthModule,
          GraphQLModule.forRoot({
               autoSchemaFile: true,
          }),
     ],
})
export class AppModule {}
