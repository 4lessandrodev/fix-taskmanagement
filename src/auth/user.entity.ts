import {
     BaseEntity,
     PrimaryGeneratedColumn,
     Column,
     Entity,
     Unique,
     OneToMany,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
// import { type } from "os";
import { Task } from '../tasks/task.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { FilterableField } from '@nestjs-query/query-graphql';

@Entity()
@ObjectType()
@Unique(['username'])
export class User extends BaseEntity {
     @PrimaryGeneratedColumn()
     @FilterableField()
     id: number;

     @Column()
     @Field()
     username: string;

     @Column()
     @Field()
     password: string;

     @Column()
     @Field()
     salt: string;

     @OneToMany((type) => Task, (task) => task.user)
     tasks: Task[];

     async validatePassword(password: string): Promise<boolean> {
          const hash = await bcrypt.hash(password, this.salt);
          return hash === this.password;
     }
}
