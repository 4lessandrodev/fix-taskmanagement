import { Task } from "./task.entity";
import { Repository } from "typeorm";
import { CreateTaskDto } from "./dto/create-task.dto";
import { User } from "../auth/user.entity";
export declare class TaskRepository extends Repository<Task> {
    getTask(user: User): Promise<Task[]>;
    createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task>;
}
