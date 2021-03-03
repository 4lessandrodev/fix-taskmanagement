import {
     BaseEntity,
     Entity,
     PrimaryGeneratedColumn,
     Column,
     ManyToOne,
} from 'typeorm';
import { TaskStatus } from './task-status.enum';
import { User } from '../auth/user.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { FilterableField } from '@nestjs-query/query-graphql';

@Entity()
@ObjectType()
export class Task extends BaseEntity {
     @Field(() => ID)
     @PrimaryGeneratedColumn()
     id: number;

     @Column()
     @FilterableField(() => String)
     title: string;

     @Column()
     @Field()
     description: string;

     @Column()
     @Field()
     status: TaskStatus;

     @ManyToOne((type) => User, (user) => user.tasks)
     @Field()
     user: User;

     @Column()
     @Field()
     userId: number;
}
