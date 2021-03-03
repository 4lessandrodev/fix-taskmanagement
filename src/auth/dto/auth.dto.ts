import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@ObjectType('User')
export class AuthDto {
     @IsString()
     @FilterableField()
     username: string;

     @IsString()
     @FilterableField()
     password: string;
}
