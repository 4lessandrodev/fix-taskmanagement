import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { IsString } from 'class-validator';

@ObjectType('Task')
export class CreateTaskDto {
     @IsNotEmpty()
     @IsString()
     @FilterableField()
     title: string;

     @IsString()
     @IsNotEmpty()
     @FilterableField()
     status: string;

     @IsNotEmpty()
     @IsString()
     @FilterableField()
     description: string;
}
